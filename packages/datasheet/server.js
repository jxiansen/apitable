
const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');
const port = parseInt(process.env.WEB_SERVER_PORT, 10) || 3000;
const isDevelopment = process.env.NODE_ENV !== 'production';

const portfinder = require('portfinder');

portfinder.setBasePort(port);
portfinder.setHighestPort(3333);

portfinder
  .getPortPromise()
  .then((port) => {
    const app = next({ dev: isDevelopment, port, hostname: 'localhost' });
    const handle = app.getRequestHandler();

    app
      .prepare()
      .then(() => {
        const server = express();

        if (isDevelopment) {
          server.use(
            createProxyMiddleware('/databus', {
              target: process.env.API_PROXY || 'http://127.0.0.1:8082',
              changeOrigin: true,
              cookieDomainRewrite: '',
            }),
          );

          server.use(
            createProxyMiddleware('/nest', {
              // Direct connection to local NodeJS environment
              target: process.env.API_PROXY || process.env.API_ROOM_SERVER || 'http://127.0.0.1:3333',
              changeOrigin: true,
              cookieDomainRewrite: '',
            }),
          );

          server.use(
            createProxyMiddleware('/api', {
              target: process.env.API_PROXY || process.env.API_BACKEND_SERVER || 'http://127.0.0.1:8081',
              changeOrigin: true,
              cookieDomainRewrite: '',
            }),
          );

          server.use(
            createProxyMiddleware('/fusion', {
              target: process.env.API_PROXY || process.env.API_FUSION_SERVER || 'http://127.0.0.1:3333',
              changeOrigin: true,
              cookieDomainRewrite: '',
            }),
          );

          server.use(
            createProxyMiddleware('/document', {
              target: process.env.API_PROXY || process.env.API_SOCKET_SERVER_DOCUMENT || 'http://127.0.0.1:3006',
              ws: true,
              changeOrigin: true,
              cookieDomainRewrite: '',
            }),
          );

          server.use(
            createProxyMiddleware('/room', {
              target: process.env.API_PROXY || process.env.API_SOCKET_SERVER_ROOM || 'http://127.0.0.1:3005',
              ws: true,
              changeOrigin: true,
              cookieDomainRewrite: '',
            }),
          );

          server.use(
            createProxyMiddleware('/notification', {
              target: process.env.API_PROXY || process.env.API_SOCKET_SERVER_NOTIFICATION || 'http://127.0.0.1:3002',
              ws: true,
              changeOrigin: true,
              cookieDomainRewrite: '',
            }),
          );

          server.use(
            createProxyMiddleware('/document', {
              target: process.env.API_PROXY || process.env.API_DOCUMENT_SERVER_ROOM || 'http://127.0.0.1:3006',
              ws: true,
              changeOrigin: true,
              cookieDomainRewrite: '',
            }),
          );
        }

        server.all('*', (req, res) => {
          return handle(req, res);
        });

        server.listen(port, () => {
          console.log(`> Ready on http://localhost:${port}`);
        });
      })
      .catch((e) => {
        console.log(e);
      });
  })
  .catch((err) => {
    console.log(err);
  });
