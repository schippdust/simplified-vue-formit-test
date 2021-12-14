# simplified-vue-to-formit-test

## Project setup
```
npm install
```

### Compiles and hot-reloads for viewing in browser during development

This is useful for building and testing more rapidly when changes do not pertain directly to the FormIt API

```
npm run serve
```

### Locally hosts files for FormIt viewing during development

This is useful for testing changes that directly interact with the FormIt API during development.  While hosting files statically run the build command to update the hosted plugin, then when building has finished "Hard Reload" the plugin inside of FormIt.

```
npm run start
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
