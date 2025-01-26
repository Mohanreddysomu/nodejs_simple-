// // const express=require('express');
// // const app=express()

// // app.get('/',(req,res)=>{
// //       console.log('user hit the rsource')
// //  res.send('home page')
// // })
// // app.get('/about',(req,res)=>{
// //     res.send('about page')
// // })

// // app.all('*',(req,res)=>{
// //     res.status(404).send('<h1>page not found</h1>')
// // })


// // app.listen(5000,()=>{
// //     console.log(`server is listing in port:5000`);
// // })



// const express=require('express');
// const app=express()
// const path=require('path');

// //setup static and middleware
// app.use(express.static('./public'))

// // app.get('/',(req,res)=>{
// //     res.sendFile(path.resolve(__dirname,'./index.html'))
//     //adding to static asserts
//     //SRR
// // })


// app.all('*',(req,res)=>{
//     res.status(404).send('resource not found');
// })


// app.listen(5000,()=>{
//     console.log(`server is listening in port:5000`);
// })


const express=require('express');
const app=express();
const {products}=require('./data');

 app.get('/',(req,res)=>{
    res.json([{name:'john'},{name:'susan'}])
 })

app.listen(5000,()=>{
      console.log(`server is listing on port:5000`)
})