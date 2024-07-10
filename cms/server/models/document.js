
// const mongoose = require('mongoose');

// const messageSchema = mongoose.Schema({
//    id: { type: String, required: true },
//    subject: { type: String },
//    msgText: { type: String, required: true },
//    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'Document'}
// });

// module.exports = mongoose.model('Message', messageSchema);
import mongoose from "mongoose";
import { randomUUID } from "crypto";

const childDocumentSchema = mongoose.Schema(
{
   _id: { type: String, default: () => randomUUID(), required: true },
   name: { type: String, required: true },
   description: { type: String },
   url: { type: String },
},
{ _id: false },
);

const documentSchema = mongoose.Schema(
{
   _id: { type: String, default: () => randomUUID(), required: true },
   name: { type: String, required: true },
   description: { type: String },
   url: { type: String },
   children: [{ type: childDocumentSchema }],
},
{ _id: false },
);

const documentModel = mongoose.models.Document || mongoose.model("Document", documentSchema);

export default documentModel;