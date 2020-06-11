import * as mongoose from 'mongoose';

const geometerySchema = new mongoose.Schema({
    location: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Polygon'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
      }
})
const geometery = new mongoose.Schema(
  {
      name : {
          type : String
      },
      geometery : geometerySchema
  },
  {
    strict: false,
    timestamps: true
  }
);

export default mongoose.model('places', geometery);
