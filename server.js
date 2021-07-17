const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");
const path = require('path');
const connectDB = require('./config/db');
const fs = require('fs');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './uploads/');
  },
  filename: function(req,file,cb){
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req,file,cb) => {
    //reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' ){
        cb(null, true);
    }
    else{
          cb(null, false);
    }

};
const upload = multer({storage: storage, limits: {
  fileSize: 1024 * 1024 * 5
},
fileFilter: fileFilter
});

const app = express();
app.use('/uploads', express.static('uploads'))

connectDB();

app.use(express.json({extended: false}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use(bodyParser.json());

// mongoose.connect(db,{
//         useNewUrlParser:true,
//         useCreateIndex:true,
//         useUnifiedTopology:true
// });     

const Product = mongoose.model("products", new mongoose.Schema({
    _id:{ type:String, default: shortid.generate },
    title:{type:String, required:true},
    description: {type:String, required:true},
    image: {type: String, required: true},
    price: {type:Number, required:true},
    availableSizes: [String],

})
);
 

//get all products
app.get("/api/products", async(req, res) => {
    const products = await Product.find({});
    res.send(products);
});
 
//add products
app.post("/api/products", upload.single('file'), async(req, res) => {
      console.log(req.file);
        const newProduct = new Product({
          title:req.body.title,
          description:req.body.description,
          price:req.body.price,
          availableSizes:req.body.availableSizes,
          image:req.file.path
        });
        const savedProduct = await newProduct.save();
        res.send(savedProduct);
        window.location.reload;
});

//delete products
app.delete("/api/products/:id", async(req, res) => {
   const deletedProduct = await Product.findByIdAndDelete(req.params.id);
   res.send(deletedProduct);
});

const Order = mongoose.model("order", new mongoose.Schema({
  _id:{
    type:String,
    default:shortid.generate
  },
  email:String,
  name:String,
  address:String,
  total:Number,
  cartItems:[{
    _id:String,
    title:String,
    price:Number,
    count:Number
  }],  
},{
  timestamps:true
}));

app.post('/api/orders',async(req,res)=>{
    if(!req.body.name ||
        !req.body.email ||
        !req.body.address ||
        !req.body.total ||
        !req.body.cartItems
      ){
        return res.send({message:"Data is Required!!!"})
      }
      const order = await Order(req.body).save();
      res.send(order);
});

app.get("/api/orders", async (req, res) => {
  const orders = await Order.find({});
  res.send(orders);
});
app.delete("/api/orders/:id", async (req, res) => {
  const order = await Order.findByIdAndDelete(req.params.id);
  res.send(order);
});

//serve static assets in production
if(process.env.NODE_ENV === 'production'){
  //set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
  });
}
   

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in port ${PORT}`));

