# simplified-vue-to-formit-test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development

This is useful for building and testing outside of FormIt

```
npm run serve
```

### Compiles and minifies for production

This builds the plugin.html file in the dist folder along with all its dependencies that is referenced as the FormIt panel source by the manifest.json.  It is this file and its dependencies that will be read by FormIt when it attempts to open the plugin from GitHub pages.  You will need to push the updates back to a GitHub hosted repository with pages active on the given branch.

```
npm run build
git add .
git commit -m "name of your commit"
git push
```

### Lints and fixes files

This keeps the code clean and readable

```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
