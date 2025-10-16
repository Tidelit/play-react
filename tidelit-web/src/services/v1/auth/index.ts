import { axiosClient, AXIOS_CLIENT_ID } from "../../../api/axios_client";
import { CreateUserData, LoginData } from "@/schemes";
import { useMutation } from "@tanstack/react-query";

// login
const login = async (data: LoginData): Promise<any> => {
  const response = await axiosClient.post("/api/login", data)

  if(response.data?.token) {
    // Guardar el token en localStorage
    localStorage.setItem("accessToken", response.data.token)
    console.log("[Login] Token guardado en localStorage:", response.data.token)
  }
  return response.data
}

// Registro nuevo
const registerUser = async (data: CreateUserData): Promise<any> => {
  const response = await axiosClient.post("/api/register", data)
  return response.data
}

// Auth mutations

// mutation del login
export const useLoginMutation = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("Login exitoso:", data)
    },
    onError: (error: any) => {
      if(error?.response?.status === 400) {
        console.log("Datos de entrada inválidos:", error?.response?.data?.message)
      } else if (error?.response?.status === 401){
        console.log("Credenciales inválidas:", error?.response?.data?.message)
      } else {
        console.log("Error en login:", error)
      }
    },
  })
}

// mutation de register
export const useRegisterUserMutation = () => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      console.log("Usuario registrado:", data)
    },
    onError: (error: any) => {
      if (error?.response?.status === 400) {
        console.error("Datos de entrada inválidos:", error?.response?.data?.message)
      } else if (error?.response?.status === 409) {
        console.error("Conflicto:", error?.response?.data?.message)
      } else if (error?.response?.status >= 500) {
        console.error("Error interno del servidor:", error?.response?.data?.message)
      } else {
        console.error("Error registrando usuario:", error)
      }
    },
  })
}

// prueba
console.debug('Service using axios:', AXIOS_CLIENT_ID) // <-- verificar que llega el axios
