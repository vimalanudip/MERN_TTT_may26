var express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const multer = require('multer');

app.set('view engine','ejs');
const imageStorage = multer.diskStorage(
    {
        destination:"public/image",
        filename:(req,file,cb)=>{cb(null,file.fieldname+"_"+file.originalname+"_"+Date.now()+path.extname(file.originalname))}
    }
);
const imageUploader = multer({
   storage:imageStorage,
   limits:{
        fileSize:2100000 // 2mbfile
   },
   fileFilter(req,file,cb){
        if( !file.originalname.match(/\.(jpg|png|gif)$/))
            return cb(new Error("only jpg, png, gif allowed"));
        else
            cb (undefined,true);
   }

}); // end of image uploader

app.get("/fileupload",(req,res)=>{
    res.render('imageupload');
});
app.post("/uploadprofilepic",imageUploader.single("profilepic"),(req,res)=>{
    let uploaded_filename="";
    try{
            uploaded_filename=req.file.filename;
    }
    catch(e)
    {
        console.log(e);
        res.send("error in uploading file");
    }
 const fullpath = path.join(__dirname+"/public/image/"+uploaded_filename);
    res.send("file uploaded to folder with name :- "+uploaded_filename+'<img src="'+fullpath+'" width="200" />');

})
app.listen(8082,()=>console.log("server running at port no 8082"));