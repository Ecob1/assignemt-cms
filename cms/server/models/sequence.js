
// const mongoose = require('mongoose');

// const messageSchema = mongoose.Schema({
//    id: { type: String, required: true },
//    subject: { type: String },
//    msgText: { type: String, required: true },
//    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'Sequence'}
// });

// module.exports = mongoose.model('Message', messageSchema);

import mongoose from "mongoose";
import { randomUUID } from "crypto";

const sequenceSchema = mongoose.Schema(
{
   _id: { type: String, default: () => randomUUID(), required: true },
   maxDocumentId: { type: Number, required: true },
   maxMessageId: { type: Number, required: true },
   maxContactId: { type: Number, required: true },
},
{ _id: false },
);

const sequenceModel = mongoose.model("Sequence", sequenceSchema);

export default sequenceModel;