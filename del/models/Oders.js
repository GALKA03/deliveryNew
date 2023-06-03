import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const gravatar = require('gravatar');

const OderSchema = new Schema({
  name:{
    type: String
  },
//   email: {
//     type: String,
//     required: [true, "Email is required"],
//     unique: true,
//   },
//   phone: {
//     type: Number,
//  required: [true, "Number is required"],
//   },
  address: {
    String,
    required: [true, "Address is required"],
  },
   total: {
    Number,
    required: [true, "Total is required"]
  },
  status: {
    type: Number,
    default:true
}
  
});
export default mongoose.models.Oder || mongoose.model('Oder', OderSchema)