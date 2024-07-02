const fs = require('fs');
fs.readFile('test.txt', "utf-8", (err, data) => {
    if (err) throw err;
    const emails = data.toString().split(/[\s\r\n]+/);
 
    const emailRegex = /@[a-zA-Z0-9.-]+/;
    let emailDict = {};
  
  //  for(let i=0; i<emails.length; i++) {
  //      let email = emails[i];  
    for(let email of emails) {   
        let domain = "";
        if(email.match(emailRegex)) domain = email.match(emailRegex)[0].substring(1);
        if (emailDict[domain]) emailDict[domain]++;
        else if (domain!="") emailDict[domain] = 1;
    }

    const sortedDict = Object.fromEntries(
        Object.entries(emailDict).sort(([,a],[,b]) => b-a)
    );

    for(let i=0; i<10; i++) {
        let entry = Object.entries(sortedDict)[i];
        console.log(entry[0] + ":" + entry[1]);
    }
});

