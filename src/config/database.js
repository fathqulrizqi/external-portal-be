import { PrismaClient } from "../../prisma/mainDB/@prisma/client-main/index.js";
import pkgNGK from "../../prisma/NGKbusi/@prisma/client-NGKbusi/index.js";
const PrismaClientNGK = pkgNGK.PrismaClient;
import { logger } from "./logging.js";

const ebidding = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
    {
      emit: "event",
      level: "error",
    },
    {
      emit: "event",
      level: "info",
    },
    {
      emit: "event",
      level: "warn",
    },
  ],
});

ebidding.$on("error", (e) => {
  logger.error(e);
});

ebidding.$on("warn", (e) => {
  logger.warn(e);
});

ebidding.$on("info", (e) => {
  logger.info(e);
});

ebidding.$on("query", (e) => {
  logger.info(e);
});

const NGKbusi = new PrismaClientNGK({
  log: [
    {
      emit: "event",
      level: "query",
    },
    {
      emit: "event",
      level: "error",
    },
    {
      emit: "event",
      level: "info",
    },
    {
      emit: "event",
      level: "warn",
    },
  ],
});

NGKbusi.$on("error", (e) => {
  logger.error(e);
});

NGKbusi.$on("warn", (e) => {
  logger.warn(e);
});

NGKbusi.$on("info", (e) => {
  logger.info(e);
});

NGKbusi.$on("query", (e) => {
  logger.info(e);
});

export {ebidding,NGKbusi};