import express, {Request, Response} from "express";
import {Api} from "./utils/api";
import cors from "cors";

Api.setUse(cors({
    origin: (origin: any, callback: any) => {
        callback(null, origin);
    }
}))
Api.setUse(express.json());

Api.setUse(
    (req: any, res: any, next: any) => {
        res.header("Access-Control-Allow-Origin", "*");
        return next();
    }
)

Api.setGetRoute("/", (req: any, res: any) => {
    const example = req.query.example; // req.query["example"]
    res.send({
        status: 'development',
        purpose: 'Purdue Elmore Electrical and Computer Engineering Student Society',
        owner: 'Purdue ECE'
    });
});

Api.listen();
