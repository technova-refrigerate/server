import mongoose from 'mongoose';


const ProductSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Name_subtitle: {
    type: String,
    required: false
  },
  Pantry_Min: {
    type: Number,
    required: false
  },
  Pantry_Max: {
    type: Number,
    required: false
  },
  Pantry_Metric: {
    type: String,
    enum: [
      'Days', 'Weeks', 'Months', 'When Ripe', 
      'Indefinitely', 'Not Recommended'
    ],
    required: false
  },
  Pantry_tips: {
    type: String,
    required: false
  },
  DOP_Pantry_Min: {
    type: Number,
    required: false
  },
  DOP_Pantry_Max: {
    type: Number,
    required: false
  },
  DOP_Pantry_Metric: {
    type: String,
    enum: [
      'Days', 'Weeks', 'Months', 'When Ripe', 
      'Indefinitely', 'Not Recommended'
    ],
    required: false
  },
  DOP_Pantry_tips: {
    type: String,
    required: false
  },
  Pantry_After_Opening_Min: {
    type: Number,
    required: false
  },
  Pantry_After_Opening_Max: {
    type: Number,
    required: false
  },
  Pantry_After_Opening_Metric: {
    type: String,
    enum: [
      'Days', 'Weeks', 'Months', 'When Ripe', 
      'Indefinitely', 'Not Recommended'
    ],
    required: false
  },
  Refrigerate_Min: {
    type: Number,
    required: false
  },
  Refrigerate_Max: {
    type: Number,
    required: false
  },
  Refrigerate_Metric: {
    type: String,
    enum: [
      'Days', 'Weeks', 'Months', 'When Ripe', 
      'Indefinitely', 'Not Recommended'
    ],
    required: false
  },
  Refrigerate_tips: {
    type: String,
    required: false
  },
  DOP_Refrigerate_Min: {
    type: Number,
    required: false
  },
  DOP_Refrigerate_Max: {
    type: Number,
    required: false
  },
  DOP_Refrigerate_Metric: {
    type: String,
    enum: [
      'Days', 'Weeks', 'Months', 'When Ripe', 
      'Indefinitely', 'Not Recommended'
    ],
    required: false
  },
  DOP_Refrigerate_tips: {
    type: String,
    required: false
  },
  Refrigerate_After_Opening_Min: {
    type: Number,
    required: false
  },
  Refrigerate_After_Opening_Max: {
    type: Number,
    required: false
  },
  Refrigerate_After_Opening_Metric: {
    type: String,
    enum: [
      'Days', 'Weeks', 'Months', 'When Ripe', 
      'Indefinitely', 'Not Recommended', 
      'Package use-by date'
    ],
    required: false
  },
  Refrigerate_After_Thawing_Min: {
    type: Number,
    required: false
  },
  Refrigerate_After_Thawing_Max: {
    type: Number,
    required: false
  },
  Refrigerate_After_Thawing_Metric: {
    type: String,
    enum: [
      'Days', 'Weeks', 'Months', 'When Ripe', 
      'Indefinitely', 'Not Recommended'
    ],
    required: false
  },
  Freeze_Min: {
    type: Number,
    required: false
  },
  Freeze_Max: {
    type: Number,
    required: false
  },
  Freeze_Metric: {
    type: String,
    enum: [
      'Days', 'Weeks', 'Months', 'When Ripe', 
      'Indefinitely', 'Not Recommended'
    ],
    required: false
  },
  Freeze_Tips: {
    type: String,
    required: false
  },
  DOP_Freeze_Min: {
    type: Number,
    required: false
  },
  DOP_Freeze_Max: {
    type: Number,
    required: false
  },
  DOP_Freeze_Metric: {
    type: String,
    enum: [
      'Days', 'Weeks', 'Months', 'When Ripe', 
      'Indefinitely', 'Not Recommended'
    ],
    required: false
  },
  DOP_Freeze_Tips: {
    type: String,
    required: false
  }
});

const Product = mongoose.model('Product', ProductSchema);
export default Product;
