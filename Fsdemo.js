const fs = require('fs')

//reading a file

fs.readFile('abc.txt',(err,data) => {
    if(err)console.log(err)
    else console.log(data.toString())
})

//writing or creating a file

fs.writeFile('xyz.txt',"good morning",(err) => {
    if(err)console.log(err)
    else console.log("successfully updated")
})

//appending or creating or updating a file

fs.appendFile('xyz.txt',"How r u",(err) => {
    if(err)console.log(err)
    else console.log("successfully updated")
})

//unlink or delete a file

fs.unlink("xyz1.txt",(err) => {
    if(err)console.log(err)
    else console.log("deleted")
})

//rename a file[note : file must be existed]

fs.rename('xyz.txt',"def.txt",(err) => {
    if(err)console.log(err)
        else console.log("renamed")
})