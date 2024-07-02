const fs = require('fs');
fs.readFile('test2.txt', "utf-8", (err, data) => {
    if (err) throw err;
    const emails = data.toString().split(" ");
    let counter = 0;
    const regex = /^[a-zA-Z0-9.'_%+-]+@softwire\.com$/;
  
    for(let i=0; i<emails.length; i++) {
        let email = emails[i];
        let len = email.length;
        console.log(email);
          
       // if((email.match(regex))) {
           if(email.substring(len-13, len) === "@softwire.com") {
                counter++;
                console.log("Match",email);
        }

    }
    console.log(counter);
});

