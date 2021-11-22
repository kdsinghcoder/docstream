import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  hash: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
});

mongoose.models = {};

const UserModel = mongoose.model('user', userSchema);

export default UserModel;