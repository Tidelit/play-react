#!/bin/bash

# Script de despliegue automatizado para Tidelit Web
# Uso: ./deploy.sh

echo "🚀 Iniciando despliegue de Tidelit Web..."

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Función para imprimir mensajes
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    print_error "No se encontró package.json. Ejecuta este script desde la raíz del proyecto."
    exit 1
fi

# Paso 1: Limpiar instalaciones anteriores
print_status "Limpiando instalaciones anteriores..."
rm -rf node_modules
rm -rf .next
rm -f server.js
rm -f package-lock.json

# Paso 2: Instalar dependencias
print_status "Instalando dependencias..."
npm install

if [ $? -ne 0 ]; then
    print_error "Error al instalar dependencias"
    exit 1
fi

# Paso 3: Compilar el proyecto
print_status "Compilando proyecto para producción..."
npm run build

if [ $? -ne 0 ]; then
    print_error "Error al compilar el proyecto"
    exit 1
fi

# Paso 4: Compilar el servidor
print_status "Compilando servidor..."
npm run build:server

if [ $? -ne 0 ]; then
    print_error "Error al compilar el servidor"
    exit 1
fi

# Paso 5: Verificar archivos generados
print_status "Verificando archivos generados..."

if [ ! -f "server.js" ]; then
    print_error "No se generó server.js"
    exit 1
fi

if [ ! -d ".next" ]; then
    print_error "No se generó la carpeta .next"
    exit 1
fi

# Paso 6: Crear archivo de verificación
print_status "Creando archivo de verificación..."
echo "Despliegue completado el $(date)" > deploy-verification.txt

# Paso 7: Mostrar resumen
echo ""
print_status "Despliegue completado exitosamente!"
echo ""
echo "📁 Archivos listos para subir a cPanel:"
echo "   ✅ /public/"
echo "   ✅ /src/"
echo "   ✅ /server.js"
echo "   ✅ /package.json"
echo "   ✅ /.next/"
echo "   ✅ Todos los archivos de configuración"
echo ""
echo "❌ NO subir:"
echo "   ❌ /node_modules/"
echo "   ❌ /server.ts"
echo "   ❌ /.git/"
echo ""
echo "🔧 Próximos pasos:"
echo "   1. Subir archivos a cPanel"
echo "   2. Configurar variables de entorno en cPanel"
echo "   3. Ejecutar 'npm install --production' en cPanel"
echo "   4. Configurar Application startup file: server.js"
echo "   5. Reiniciar la aplicación"
echo ""
print_status "¡Listo para desplegar en cPanel!"
