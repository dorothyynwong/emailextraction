const fs = require('fs');
fs.readFile('test.txt', (err, data) => {
    if (err) throw err;
    //console.log(data.toString());
    const emails = data.toString().split(" ");
    // console.log(emails);
    let counter = 0;
    for(let i=0; i<emails.length; i++) {
        // console.log(emails[i]);
        for (let j = 0; j < emails[i].length; j++) {
            if ((emails[i].substring(i, 13) === "@softwire.com")) {
                console.log(emails[i]);
                counter++;
            }
        }

    }
    console.log(counter);
});


/*var counter = 0
 
for(var i = 0; i < input.length; i++) {
  if ((input.substring(i, 13) == '@softwire.com')) { counter = counter + 1 }
}
 
print counter
*/