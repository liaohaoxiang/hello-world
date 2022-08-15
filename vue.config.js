const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

const sass = {
  use: [
    "vue-style-loader",
    "css-loader",
    {
      loader: "sass-loader",
      options: {
        indentedSyntax: true,
        // sass-loader version >= 8
        sassOptions: {
          indentedSyntax: true,
        },
      },
    },
  ],
};

module.rules = sass;
