module.exports = {
  build: {
    "index.html": "index.html",
    "app.js": [
      "javascripts/app.js",
      "javascripts/myapp.js"
    ],
    "app.css": [
      "stylesheets/app.css"
    ],
    "images/": "images/"
  },
  deploy: [
    "MetaCoin",
    "Showme",
    "Ticketbooth",
    "ConvertLib"
  ],
  rpc: {
    host: "localhost",
    port: 8545
  }
};
