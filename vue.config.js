module.exports = {
  publicPath: "",
  //set this to false to get rid of the source map files
  productionSourceMap: false,
  //dev server prevents CORS errors when referencing images
  //or other web hosted assets during development
  devServer: {
    proxy: "https://schippdust.github.io/simplified-vue-formit-test/",
  },
  //index path sets the name of the file that will exist at index of the webpage
  indexPath: "plugin.html",
  //dependencies written in ts will be transpiled to js before use in building application
  transpileDependencies: ["vuetify"],
};
