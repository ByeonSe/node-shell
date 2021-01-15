
const fs = require('fs');

function cat () {

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
fs.readFile('bash.js', 'utf8', function(err, data){ 
      
    // Display the file content 
    console.log(data); 
});

console.log('readFile called');