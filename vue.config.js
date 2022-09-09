const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "Stickers Manager",
    themeColor: "#D65A00",
  },
});
