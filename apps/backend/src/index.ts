import express from "express";
import { BACKEND_URL } from "@repo/common/config";
import { VALUE } from "@repo/common/config";
const app = express()

app.get("/", (req, res) => {
    res.json({
        message: "hello world",
        URL: BACKEND_URL,
        name: VALUE
    });
})

app.listen(3005);