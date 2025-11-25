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

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cookieParser());

const allowedOrigins = [
  "http://192.168.0.16:3000",
  "http://localhost:3000",
];

// table ip


app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
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
