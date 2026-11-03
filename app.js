const fs = require("fs/promises");
const path = require("path");
//creating a path
let rootDir = path.join("My Files", "Documents");
console.log(rootDir);
async function fileDir() {
    //creating a directory
  try {
    const DirectoryPath = await fs.mkdir(rootDir, { recursive: true });
  } catch (err) {
    console.log(err);
  }
  //creating a file in a directory
  const newFilePath = path.join(rootDir, "notes.txt");
  console.log(newFilePath);
  try {
    const data = await fs.writeFile(newFilePath, "Hello notes");
  } catch (err) {
    console.log(err);
  }
  //reading and displaying from the file
  try{
    const readData = await fs.readFile(newFilePath, "utf8");
    console.log(`Reading from the file: "${readData}"`);
  }catch(err){
    console.log(err)
  }
  //adding more text
  try{
    await fs.appendFile(newFilePath, "\nDoing it from node js.")
    const addOns = await fs.readFile(newFilePath, "utf8")
    console.log(`Appended Data: ${addOns}`)
  }catch(err){
    console.log(err)
  }
  //accessing a file or checking where it is accessible or not
  try{
   const access = await fs.access(newFilePath);
    console.log("File exists")
  }catch(err){
    console.log(err)
}
//deleting the file
// try{
//     await fs.unlink(newFilePath);
//     console.log("File is deleted");
// }catch(err){
//     console.log(err)
// }
}
fileDir();
