const files = import.meta.globEager('./*.js')

const modules = {};

for (const path in files) {
    modules[path.replace(/(\.\/|\.js)/g, '')] = files[path].default;
}

export default modules;
