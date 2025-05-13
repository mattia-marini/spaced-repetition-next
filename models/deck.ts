import mongoose, { Schema } from "mongoose";

const deckSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the User
    name: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

const Deck = mongoose.models.Deck || mongoose.model("Deck", deckSchema);

export default Deck;
