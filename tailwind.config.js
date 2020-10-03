module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ["index.html"]
  },
  theme: {
    extend: {
      screens: {
        "xs": "500px"
      }
    },
  },
  variants: {},
  plugins: [],
}
