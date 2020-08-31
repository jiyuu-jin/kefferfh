
const withPWA = require('next-pwa')

module.exports = withPWA({
    pwa: {
        dest: 'public'
    },
    exportPathMap: function () {
      return {
        "/": { page: "/" },
        "/prices": { page: "/prices" },
        "/about": { page: "/about" },
        "/funeral": { page: "/funeral" },
        "/cremation": { page: "/cremation" },
        "/immediate-burial": { page: "/immediate-burial" },
      }
    },
})