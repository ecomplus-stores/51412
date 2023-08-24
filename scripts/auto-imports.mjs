#!/usr/bin/env zx

const _files = {}
const createAll = () => {
  ;['custom-components', 'custom-plugins'].forEach(async (folder) => {
    const files = await glob([`template/${folder}/**/*.{js,scss,css}`])
    if (_files[folder]) {
      let isChanged = files.length !== _files[folder].length
      if (!isChanged) {
        for (let i = 0; i < files.length; i++) {
          if (!_files[folder].includes(files[i])) {
            isChanged = true
            break
          }
        }
      }
      if (!isChanged) return
    }
    _files[folder] = files
    let js = ``
    let scss = ``
    files.forEach((filename) => {
      if (filename.endsWith('/all.js') || filename.endsWith('/_all.scss')) {
        return
      }
      if (filename.endsWith('.js')) {
        if (!/\/_[^/]+\.js$/.test(filename)) {
          js += `import '${filename.replace(`template/${folder}/`, './')}'\n`
        }
      } else {
        scss += `@import '${filename.replace(`template/${folder}/`, './')}';\n`
      }
    })
    fs.writeFile(path.join(__dirname, `../template/${folder}/all.js`), js, 'utf8')
    fs.writeFile(path.join(__dirname, `../template/${folder}/_all.scss`), scss, 'utf8')
  })
}

const shouldWatch = argv._.includes('watch')
if (shouldWatch) {
  setInterval(() => {
    createAll()
  }, 300)
}
createAll()
