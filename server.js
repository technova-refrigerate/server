import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './connectDB.js';
dotenv.config()

import Product from './models/productModel.js';

const app = express();
const port = process.env.PORT || 8080;
connectDB();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello!');
})

app.get('/products/all', async (req, res) => {
    try {
        const products = await Product.find({}, "_id Name");
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(port, ()=> console.log(`Server running on port ${port}`));