import axios, { 
  AxiosError, 
  AxiosResponse, 
  InternalAxiosRequestConfig 
} from 'axios'

// configuracion de la API - basado en la app
const settings = {
  API_URL: 'https://api.tidelit.co',
}

const BASIC_AUTH_USERNAME = process.env.NEXT_PUBLIC_BASIC_USERNAME
const BASIC_AUTH_PASSWORD = process.env.NEXT_PUBLIC_BASIC_PASSWORD

const basicAuthCredentials = typeof btoa !== 'undefined' 
  ? btoa(`${BASIC_AUTH_USERNAME}:${BASIC_AUTH_PASSWORD}`)
  : Buffer.from(`${BASIC_AUTH_USERNAME}:${BASIC_AUTH_PASSWORD}`).toString('base64')

// Instancia principal de Axios
const axiosClient = axios.create({
  baseURL: settings.API_URL,
  withCredentials: true,
  headers: {
    ...(BASIC_AUTH_USERNAME && BASIC_AUTH_PASSWORD
      ? { Authorization: `Basic ${basicAuthCredentials}` }
      : {}),
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

// Interceptor de request
axiosClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null
      if (token) {
        if (config.headers) {
          config.headers.set?.('Authorization', `Bearer ${token}`)
        } else {
          // Creamos un AxiosHeaders si no existe
          (config as any).headers = new (axios.AxiosHeaders)({
            Authorization: `Bearer ${token}`,
          })
        }
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error al leer accessToken desde localStorage:', error)
    }
    return config
  },
  (error: AxiosError) => Promise.reject(error),
)

// Interceptor de respuesta
const setupAxiosInterceptors = (logout: () => void) => {
  axiosClient.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      const status = error.response?.status
      if(status === 401){
        try {
          logout()
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error('Error al ejecutar la llamada de retorno de cierre de sesión:', err)
        }
      }
      return Promise.reject(error)
    },
  )
}

export { axiosClient, setupAxiosInterceptors }

// prueba para llamar axios en auth
export const AXIOS_CLIENT_ID = 'AXIOS_CLIENT_V1';
console.debug('[AXIOS_CLIENT_LOADED]', AXIOS_CLIENT_ID);