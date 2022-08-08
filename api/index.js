const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const authRoute=require("./routes/auth");
const usersRoute=require("./routes/users");
const postRoute=require("./routes/posts");
const categoryRoute=require("./routes/categories");
const multer=require("multer");
const path=require("path");


dotenv.config();
app.use(express.json());
app.use("/images",express.static(path.join(__dirname,"/images")));

mongoose.connect(process.env.MONGO_URL,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
}).then(()=>{
    console.log("Connection successfull");
}).catch((err)=>{
    console.log(err);
});

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images");
    },filename:(req,res,cb)=>{
        cb(null,req.body.name);  //changed req.body.name
    },
});

const upload=multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("file has been uploaded");
})

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/posts",postRoute);
app.use("/api/categories",categoryRoute);
app.get('/', (req, res) => {
    res.send('Server is ready');
});
const port = process.env.PORT || 5001;
app.listen(port,()=>{
    console.log(`Backend is running ${port}`);
})

