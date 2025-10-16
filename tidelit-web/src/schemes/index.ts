export type LoginData = {
  email: string;
  password: string;
}

export type CreateUserData = {
  perfil: number;
  nombres: string;
  email: string;
  password: string;
  pais: string;
  telefono: string;
  generos: string;
  edad: string;
  patrocinador?: string;
  usuario: string;
  nombre_artistico: string;
  genero_musical: string;
  subgenero: string;
}

export type ValidateCodeData = {
  iduser: string;
  codigo: string;
}