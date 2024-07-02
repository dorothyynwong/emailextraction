const fs = require('fs');
fs.readFile('test.txt', "utf-8", (err, data) => {
    if (err) throw err;
    const emails = data.toString().split(/[\s\r\n]+/);

    let counter = 0;
    const regex = /^[a-zA-Z0-9.'_%+-]+@softwire\.com$/;
  
    for(let i=0; i<emails.length; i++) {
        let email = emails[i];
        let len = email.length;
    
      // part 1 if(email.substring(len-13, len) === "@softwire.com") {     
        if((email.match(regex))) { //part 2  
                 counter++;
       }

    }
    console.log(counter);
});

