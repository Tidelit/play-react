export type LoginData = {
  email: string;
  password: string;
}

export type CreateUserData = {
  email: string;
  username: string;
  password: string;
  nombres: string;
  region: string;
  perfil: number;
  referido?: string;
}

// Esquema para el registro completo
export type CreateUserCompleteData = {
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