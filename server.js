const express = require("express");
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");
const path = require('path');

const app = express();
app.use(express.json({extended: false}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

// app.use(bodyParser.json());

mongoose.connect("mongodb+srv://corlard3y:booktara@cak3s.wuyr0.mongodb.net/flybuy_db?retryWrites=true&w=majority",{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true
});     

const Product = mongoose.model("products", new mongoose.Schema({
    _id:{ type:String, default: shortid.generate },
    title: String,
    description: String,
    image: String,
    price: Number,
    availableSizes: [String],

})
);

//get all products
app.get("/api/products", async(req, res) => {
    const products = await Product.find({});
    res.send(products);
});
 
//add products
app.post("/api/products", async(req, res) => {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.send(savedProduct);
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

