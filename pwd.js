
module.exports = pwd ();
 
  function pwd () {

    process.stdin.on("data", (data) => {
  
      if (data.toString().trim() === "pwd") {
        process.stdout.write(process.cwd());
        process.stdout.write("\nprompt > ");
      } 
      else {
        const cmd = data.toString().trim();
      process.stdout.write("You typed: " + cmd);
      process.stdout.write("\nprompt > ");
      }
    
    });

  }
  