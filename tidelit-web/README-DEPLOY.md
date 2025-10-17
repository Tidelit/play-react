# 🚀 Guía de Despliegue Tidelit Web - cPanel

## 📋 Resumen del Proyecto
- **Framework**: Next.js 13.5.6 (compatible con Node.js 14.21.2)
- **Lenguaje**: TypeScript
- **Styling**: Tailwind CSS 3.3.3
- **Servidor**: cPanel con Node.js 14.21.2
- **Dominio**: play.tidelit.co

## ✅ Archivos Modificados para Producción

### 1. `package.json` - Actualizado
- ✅ Versiones compatibles con Node.js 14.21.2
- ✅ Scripts optimizados para producción
- ✅ Engine requirements especificados

### 2. `server.ts` - Mejorado
- ✅ Manejo robusto de errores
- ✅ Configuración específica para cPanel
- ✅ Manejo graceful de cierre
- ✅ Logging mejorado

### 3. `next.config.ts` - Optimizado
- ✅ Configuración para producción
- ✅ Optimización de imágenes deshabilitada (requerido para cPanel)
- ✅ Headers de seguridad
- ✅ Compresión habilitada

### 4. `src/app/page.tsx` - Corregido
- ✅ Rutas de imágenes consistentes (minúsculas)

## 📁 Archivos a Subir a cPanel

### ✅ Archivos OBLIGATORIOS:
```
/public/                    (carpeta completa)
/src/                       (carpeta completa)
/server.js                  (compilado desde server.ts)
/package.json
/next.config.ts
/tailwind.config.js
/tsconfig.json
/postcss.config.mjs
/components.json
/.next/                     (generado por npm run build)
```

### ❌ Archivos que NO subir:
```
/node_modules/              (se instala en cPanel)
/.git/
/.next/cache/
/.vercel/
/server.ts                  (solo el compilado server.js)
*.log
.env.local
.env.development.local
.env.test.local
```

## 🔧 Comandos Pre-Despliegue

### 1. Instalar dependencias compatibles
```bash
npm install
```

### 2. Compilar el proyecto
```bash
npm run build
```

### 3. Compilar el servidor
```bash
npm run build:server
```

### 4. Verificar que todo funciona localmente
```bash
npm start
```

## ⚙️ Configuración en cPanel

### 1. Configuración de la Aplicación Node.js
- **Application root**: `/public_html/play.tidelit.co`
- **Application URL**: `https://play.tidelit.co`
- **Application startup file**: `server.js`
- **Node.js version**: `14.21.2`

### 2. Variables de Entorno
Agregar estas variables en cPanel:
```
NODE_ENV=production
PORT=3000
HOSTNAME=localhost
```

### 3. Configuración de Dominio
- **Subdomain**: `play.tidelit.co`
- **Document root**: `/public_html/play.tidelit.co`

## 📋 Pasos de Despliegue

### Paso 1: Preparación Local
```bash
# 1. Clonar/actualizar el repositorio
git pull origin main

# 2. Instalar dependencias
npm install

# 3. Compilar para producción
npm run build

# 4. Compilar servidor
npm run build:server

# 5. Probar localmente
npm start
```

### Paso 2: Subida a cPanel
1. **Acceder a cPanel**
2. **Ir a "Node.js Selector"**
3. **Crear nueva aplicación**:
   - Application root: `/public_html/play.tidelit.co`
   - Application URL: `https://play.tidelit.co`
   - Application startup file: `server.js`
4. **Subir archivos** (usando File Manager o FTP):
   - Subir todos los archivos de la lista ✅
   - NO subir archivos de la lista ❌
5. **Configurar variables de entorno** en cPanel
6. **Instalar dependencias** en cPanel:
   ```bash
   npm install --production
   ```

### Paso 3: Verificación
1. **Verificar que la aplicación inicia**:
   - Revisar logs en cPanel
   - Verificar que no hay errores
2. **Probar la aplicación**:
   - Acceder a `https://play.tidelit.co`
   - Verificar que cargan las imágenes
   - Probar la funcionalidad del reproductor
   - Verificar que el modal de bienvenida funciona

## 🔍 Verificación Post-Despliegue

### ✅ Checklist de Verificación:
- [ ] La aplicación carga correctamente
- [ ] Todas las imágenes se muestran
- [ ] El reproductor de música funciona
- [ ] El modal de bienvenida se abre/cierra
- [ ] La navegación entre páginas funciona
- [ ] Los carruseles funcionan correctamente
- [ ] No hay errores en la consola del navegador
- [ ] No hay errores en los logs de cPanel

### 🔧 Comandos de Diagnóstico:
```bash
# Ver logs de la aplicación
tail -f /home/usuario/logs/nodejs.log

# Verificar estado de la aplicación
ps aux | grep node

# Verificar puertos en uso
netstat -tulpn | grep :3000
```

## 🚨 Solución de Problemas Comunes

### Problema 1: Error "Cannot find module"
**Solución**: Verificar que `node_modules` se instaló correctamente
```bash
cd /public_html/play.tidelit.co
npm install --production
```

### Problema 2: Error "Port already in use"
**Solución**: Verificar que no hay otra aplicación usando el puerto 3000
```bash
lsof -i :3000
kill -9 PID_DEL_PROCESO
```

### Problema 3: Imágenes no cargan
**Solución**: Verificar rutas y permisos de archivos
- Verificar que `/public` se subió correctamente
- Verificar permisos de lectura (755)

### Problema 4: Error de compilación
**Solución**: Verificar versiones de Node.js y dependencias
```bash
node --version  # Debe ser 14.21.2
npm --version   # Debe ser >= 6.14.0
```

## 📊 Monitoreo y Mantenimiento

### Logs Importantes:
- **Application logs**: `/home/usuario/logs/nodejs.log`
- **Error logs**: `/home/usuario/logs/error.log`
- **Access logs**: `/home/usuario/logs/access.log`

### Comandos de Mantenimiento:
```bash
# Reiniciar aplicación
npm start

# Ver uso de memoria
ps aux --sort=-%mem | head

# Ver espacio en disco
df -h
```

## 🔄 Actualizaciones Futuras

### Para actualizar la aplicación:
1. Hacer cambios localmente
2. Ejecutar `npm run build && npm run build:server`
3. Subir archivos modificados a cPanel
4. Reiniciar la aplicación en cPanel

### Para actualizar dependencias:
1. Actualizar `package.json` localmente
2. Ejecutar `npm install` localmente
3. Ejecutar `npm run build && npm run build:server`
4. Subir `package.json` y `package-lock.json` a cPanel
5. Ejecutar `npm install --production` en cPanel
6. Reiniciar la aplicación

## 📞 Soporte

Si encuentras problemas durante el despliegue:
1. Revisar los logs de cPanel
2. Verificar la configuración de Node.js
3. Comprobar que todas las variables de entorno están configuradas
4. Verificar que todos los archivos se subieron correctamente

---
**Última actualización**: $(date)
**Versión**: 1.0.0
**Compatibilidad**: Node.js 14.21.2, cPanel
