import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'

const port = parseInt(process.env.PORT || '3000', 10)
const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.HOSTNAME || 'localhost'

// Configuración específica para cPanel
const app = next({ 
  dev,
  dir: __dirname,
  conf: {
    distDir: '.next',
    assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
    generateEtags: true,
    poweredByHeader: false,
    compress: true,
  }
})

const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url!, true)
      const { pathname } = parsedUrl

      // Manejo de archivos estáticos
      if (pathname?.startsWith('/_next/static/') || 
          pathname?.startsWith('/_next/image') ||
          pathname?.startsWith('/api/')) {
        await handle(req, res, parsedUrl)
        return
      }

      // Manejo de rutas de la aplicación
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })

  server.on('error', (err) => {
    console.error('Server error:', err)
  })

  server.listen(port, hostname, () => {
    console.log(`> Server listening at http://${hostname}:${port} as ${dev ? 'development' : 'production'}`)
    console.log(`> Environment: ${process.env.NODE_ENV || 'development'}`)
    console.log(`> Application root: ${__dirname}`)
  })

  // Manejo graceful de cierre
  process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully')
    server.close(() => {
      console.log('Process terminated')
    })
  })

  process.on('SIGINT', () => {
    console.log('SIGINT received, shutting down gracefully')
    server.close(() => {
      console.log('Process terminated')
    })
  })
})
