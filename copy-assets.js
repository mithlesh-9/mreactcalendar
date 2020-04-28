const fs = require('fs-extra')

fs.copy('src/assets','dist/assets',(err) => {
    if(err) {
        throw new Error(err)
    }
    console.log('Copied Assets!')
})