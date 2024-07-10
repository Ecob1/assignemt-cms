// import express from "express";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const browserPath = path.join();
// const __dirname = path.resolve(path.dirname(__filename), "../../");
// console.log("app.js", __dirname);

// const messagesRouter = express.Router();

// export default messagesRouter;
import mongoose from "mongoose";
import { randomUUID } from "crypto";

const messageSchema = mongoose.Schema(
{
    _id: { type: String, default: () => randomUUID(), required: true },
    subject: { type: String },
    msgText: { type: String, required: true },
    sender: { type: String, ref: "Contact" },
},
{ _id: false },
);

const messageModel = mongoose.models.Message || mongoose.model("Message", messageSchema);

export default messageModel;
