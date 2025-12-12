import { PrismaClient } from "../../prisma/mainDB/@prisma/client-main/index.js";
import pkgNGK from "../../prisma/NGKbusi/@prisma/client-NGKbusi/index.js";
import NGKAXClient from "../../prisma/NGKAX/@prisma/client-NGKAX/index.js";
const PrismaClientNGK = pkgNGK.PrismaClient;
const PrismaClientNGKAX = NGKAXClient.PrismaClient;
import { logger } from "./logging.js";

const niterraappdb = new PrismaClient({
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

niterraappdb.$on("error", (e) => {
  logger.error(e);
});

niterraappdb.$on("warn", (e) => {
  logger.warn(e);
});

niterraappdb.$on("info", (e) => {
  logger.info(e);
});

niterraappdb.$on("query", (e) => {
  logger.info(e);
});

const NGKbusidb = new PrismaClientNGK({
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

NGKbusidb.$on("error", (e) => {
  logger.error(e);
});

NGKbusidb.$on("warn", (e) => {
  logger.warn(e);
});

NGKbusidb.$on("info", (e) => {
  logger.info(e);
});

NGKbusidb.$on("query", (e) => {
  logger.info(e);
});

const NGKAXdb = new PrismaClientNGKAX({
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

NGKAXdb.$on("error", (e) => {
  logger.error(e);
});

NGKAXdb.$on("warn", (e) => {
  logger.warn(e);
});

NGKAXdb.$on("info", (e) => {
  logger.info(e);
});

NGKAXdb.$on("query", (e) => {
  logger.info(e);
});

export {niterraappdb,NGKbusidb, NGKAXdb};