const fs = require('fs');
fs.readFile('test.txt', "utf-8", (err, data) => {
    if (err) throw err;
    const emails = data.toString().split(/[\s\r\n]+/);
 
    const emailRegex = /@[a-zA-Z0-9.-]+/;
    let emailDict = {};
  
    for(let i=0; i<emails.length; i++) {
        let email = emails[i];     
        let domain = "";
        if(email.match(emailRegex)) domain = email.match(emailRegex)[0].substring(1);
        if (emailDict[domain]) emailDict[domain]++;
        else if (domain!="") emailDict[domain] = 1;
    }

    const sortedDict = Object.fromEntries(
        Object.entries(emailDict).sort(([,a],[,b]) => b-a)
    );

    let count = 0;
    for(let entry of Object.entries(sortedDict)) {
        console.log(entry[0]);
        count++;
        if (count === 10) break;
    }
});

