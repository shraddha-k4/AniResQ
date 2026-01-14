import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            unique: true,
            trim: true,
            required: true,
            lowercase: true,
        },
        password:{
            type:String,
            required:true
        },
        
        mobileno: {
            type: Number,
            unique: true,
            required: true,
        },
  
        role: {
            type: String,
            enum: ["citizen", "ngo"],
            default: "citizen",
        },
        address: {
            city: { type: String },
            dist:{type:String},
            state: { type: String },
            pincode: { type: Number },
            country: { type: String, default: "India" },
        },
        image: {
            type: String, 
        },
        regiid: {
  type: Number,
  required: false,
  default: null,
},

aboutus: {
  type: String,
  required: false,
  default: "",
},

mission: {
  type: String,
  required: false,
  default: "",
},

        otp: {
            type: String
          },
          otpExpiry: {
              type: Date
          }


    },
    {timestamps:true}
);
export default mongoose.model("User",userSchema);

