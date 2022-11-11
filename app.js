const fs= require('fs/promises');
const path= require('path');

// fs.mkdir('./boys',(err)=>{
//     console.log(err)
// })

// fs.mkdir('./girls',(err)=>{
//     console.log(err)
// })

// fs.appendFile('./boys/ivan.txt',JSON.stringify({gender:'boy'}),(err)=>{
//     console.log(err)
// })
//
// fs.appendFile('./boys/roman.txt',JSON.stringify({gender:'boy'}),(err)=>{
//     console.log(err)
// })
//
// fs.appendFile('./boys/stepan.txt',JSON.stringify({gender:'boy'}),(err)=>{
//     console.log(err)
// })
//
// fs.appendFile('./boys/anna.txt',JSON.stringify({gender:'girl'}),(err)=>{
//     console.log(err)
// })
// fs.appendFile('./boys/janna.txt',JSON.stringify({gender:'girl'}),(err)=>{
//     console.log(err)
// })
// fs.appendFile("./girls/viktoriya.txt",JSON.stringify({gender:'girl'}),(err)=>{
//     console.log(err)
// })
//
// fs.appendFile("./girls/vasya.txt",JSON.stringify({gender:'boy'}),(err)=>{
//     console.log(err)
// })
// fs.appendFile('./girls/dasha.txt',JSON.stringify({gender:'girl'}),(err)=>{
//     console.log(err);
// })
// fs.appendFile('./girls/danilo.txt',JSON.stringify({gender:'boy'}),(err)=>{
//     console.log(err);
// })
// fs.appendFile('./girls/svitlana.txt',JSON.stringify({gender:'girl'}),(err)=>{
//     console.log(err)
// })

// fs.readdir('./boys',(err1, files)=>{
//     console.log(files);
//     for (const file of files) {
//         fs.stat(`./boys/${file}`,(err, stats)=>{
//             console.log(`./boys/${file}`)
//             console.log(stats.isDirectory())
//             if(stats.isFile()){
//                 fs.readFile(`./boys/${file}`,(err, data)=>{
//                     console.log(data.toString())
//                     if (data.includes('girl')){
//                         fs.rename(`./boys/${file}`,`./girls/${file}`,(err)=>{})
//                     }
//                 })
//             }
//         })
//
//     }
// });

// fs.readdir('./girls',(err1, files)=>{
//     console.log(files);
//     for (const file of files) {
//         fs.stat(`./girls/${file}`,(err, stats)=>{
//             console.log(`./girls/${file}`)
//             console.log(stats.isDirectory())
//             if(stats.isFile()){
//                 fs.readFile(`./girls/${file}`,(err, data)=>{
//                     console.log(data.toString())
//                     if (data.includes('boy')){
//                         fs.rename(`./girls/${file}`,`./boys/${file}`,(err)=>{})
//                     }
//                 })
//             }
//         })
//     }
// });

const sorter= async (readFolder,writeFolder,gender)=>{
    try {
        const folderPath= path.join(__dirname,readFolder);
        const files= await fs.readdir(folderPath);

        for (const file of files) {
            const filePath = path.join(folderPath,file);
            const data = await fs.readFile(filePath);
            const user = JSON.parse(data)

            if(user.gender===gender){
                await fs.rename(filePath,path.join(__dirname,writeFolder,file))
            }
        }

    }catch (e){
        console.log(e)
    }
}

sorter('boys','girls','girl');
sorter('girls','boys','boy');