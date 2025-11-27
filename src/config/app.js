import express from 'express';
import cookieParser from "cookie-parser";
import http from 'http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import {globalRouter} from '../routes/globalRoute.js'
import {adminRouter} from '../routes/E-Bidding/adminRoute.js'
import {userRouter} from '../routes/E-Bidding/userRoute.js'
import cors from 'cors';
import sanitizeInputMiddleware from "../middleware/sanitizeInputMiddleware.js";
import { errorMiddleware } from '../middleware/errorMiddleware.js';
import { ebidding } from './database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cookieParser());


const allowedOriginsObjects = await ebidding.allowedIpCors.findMany({
  select : {
    ip : true
  }
})


const allowedOrigins = allowedOriginsObjects.map(item => item.ip);
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With","Client-Device-Uuid"],
  })
);
app.use(express.static(join(__dirname, 'public')));
app.use(express.json());
app.use(sanitizeInputMiddleware);
app.use(express.urlencoded({ extended: true }));
app.use(globalRouter);
app.use('/api/users',userRouter);
app.use('/api/admin',adminRouter);
app.use(errorMiddleware);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"]
  }
});


export {io,server};
