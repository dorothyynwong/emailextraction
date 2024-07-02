const fs = require('fs');
fs.readFile('test.txt', (err, data) => {
    if (err) throw err;
    //console.log(data.toString());
    const emails = data.toString().split(" ");
    console.log(emails);
    let counter = 0;
    for(let i=0; i<emails.length; i++) {
        console.log(emails[i]);
        //if ((emails.substring(i, 13) === "@softwire.com")) {counter++}

    }
    console.log(counter);
});


/*var counter = 0
 
for(var i = 0; i < input.length; i++) {
  if ((input.substring(i, 13) == '@softwire.com')) { counter = counter + 1 }
}
 
print counter
*/