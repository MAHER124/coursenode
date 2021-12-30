const http= require('http');
const fs= require ('fs');
const hl=require('helmet');

const server= http.createServer((req,res)=>{

   
   // res.setHeader('content-type','html/text');
   // res.write('welcome')
   // res.write('welcome to canada \n')
   // res.write('maher klabi')
   // res.write('canada\n')
   // res.write('salut1111')
//****request object */
    //res.write( req.url)
   if(req.url == '/home'){

      res.write('welcome to home')
   }
   else if (req.url == '/contact'){

      res.write('welcome to contact')
   }
   else if (req.url == '/about'){

      res.write('welcome to about \n')
   }
   else{
   // res.statusCode=404;
    res.write('page not found')
   }
   res.end()
   })

server.listen(5000,()=>{console.log('server runing')} )