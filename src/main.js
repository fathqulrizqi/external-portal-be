import 'dotenv/config';
import {io,server} from "./config/app.js";
import { logger } from "./config/logging.js";

const PORT = process.env.PORT;

logger.info(PORT);
io.on('connection', (socket) => {
  logger.info(`Client connected: ${socket.id}`);
  
  socket.on('disconnect', () => {
    logger.info(`Client disconnected: ${socket.id}`);
  });
});

server.listen(PORT, () => {
  logger.info(`Server running at http://localhost:${PORT}`);
});

