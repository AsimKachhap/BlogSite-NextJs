import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please Provide an User name."],
    unique: true,
  },

  email: {
    type: String,
    required: [true, "Please Provide an Email"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "Please enter Password"],
    select: false,
  },
});

const User = mongoose.models.users || mongoose.model("users", UserSchema);
// Use mongoose.model("users", UserSchema) and not mongoose.model("User", UserSchema) otherwise frequently you will get "Cannot
//Overwrite User mode"

export default User;
