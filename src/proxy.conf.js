const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
    ],
    target: "http://127.0.0.1:7067",
    secure: false,
    changeOrigin: true
  }
]

module.exports = PROXY_CONFIG;
