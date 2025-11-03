const fs = require("fs");

//Sync
//fs.writeFileSync("./Test.txt","Hello codders");

 

// const result = fs.readFileSync('./contact.txt','utf-8');
// console.log(result);

//Asyc
// fs.readFile('./contact.txt','utf-8',(err,result)=>{
//     if(err){
//         console.log(error);
//     }
//     else{
//         console.log(result);
//     }
// });

//Sync
// fs.appendFileSync("./Test.txt",${Date.now()}Hello);

// fs.cpSync("./Test.txt","./copy.txt");

//Delete
// fs.unlinkSync("./copy.txt");
// console.log(fs.statSync("./Test.txt"));

//MAKING FILE
// fs.mkdirSync("my-doc/a/b",{recursive:true});
// fs.rmSync('C:\\Users\\ASUS\\OneDrive\\Desktop\\NodeJs\\my-doc\\a', { recursive: true },{force:true});

//DELETE FOLDER
// const path = "C:\\Users\\ASUS\\OneDrive\\Desktop\\NodeJs\\my-doc\\a";

// fs.rmSync(path, { recursive: true, force: true }); // force prevents crash if not found
// console.log("Attempted to delete:", path);