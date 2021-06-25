
require("fs").createReadStream('./input.txt.gz')

    .pipe(require('zlib').createGunzip())

    .pipe(require("fs").createWriteStream('./input.txt'));
    
     console.log("File Decompressed.");