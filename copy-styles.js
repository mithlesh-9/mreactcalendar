const fs = require('fs')


fs.copyFile('src/Calendar.scss','dist/Calendar.scss',(err) => {
    if(err) {
        throw err;
    }
    console.log('Calendar.scss has been added!')
});