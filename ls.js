module.exports = ls ();

const fs = require('fs');

function ls () {

    process.stdin.on("data", (data) => {

        if (data.toString().trim() === "ls") {

        fs.readdir("./", "utf8", (err, files) => {
        
            if (err) {
                throw err
            } else{
                process.stdout.write(files.join("\n"))
                process.stdout.write("prompt > ");
            }
        })
        
        }
    })
}

