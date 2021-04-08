const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
app.use(bodyParser.json());

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


const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log('serve at http://localhost:5000'));


