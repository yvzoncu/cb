import mongoose, { Schema } from 'mongoose';

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const attendeSchema = new Schema(
  {
    name: String,
    surname: String,
    email: String,
    kursId: String,
  },
  {
    timestamps: true,
  }
);

const Attende =
  mongoose.models.Attende || mongoose.model('Attende', attendeSchema);

export default Attende;
