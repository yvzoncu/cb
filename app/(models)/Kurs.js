import mongoose from 'mongoose';

// Connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

const kursSchema = new mongoose.Schema(
  {
    kurs_id: { type: String, required: true },
    kurs_name: { type: String, required: true },
    kurs_type: { type: String, required: true },
    kurs_date: { type: String, required: true },
    kurs_picture: { type: String },
  },
  {
    timestamps: true,
  }
);

const Kurs = mongoose.models.Kurs || mongoose.model('Kurs', kursSchema);

export default Kurs;
