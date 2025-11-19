import multer from "multer";
import path from "path";
import fs from "fs";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let baseFolder = "";
    if (["image/jpeg", "image/jpg", "image/png"].includes(file.mimetype)) {
      baseFolder = "images";
    } else if (file.mimetype === "application/pdf") {
      baseFolder = "documents";
    } else {
      baseFolder = "misc";
    }
    const requestedSubfolder = req.query.mainFolder || "default";

    const isSafe = !requestedSubfolder.includes('..') && 
                   !requestedSubfolder.includes('/') && 
                   !requestedSubfolder.includes('\\') &&
                   !requestedSubfolder.includes('%');

    if (!isSafe) {
      return cb(new Error("Nama folder tidak valid (mengandung karakter terlarang)."), "");
    }
    
    const folderPath = path.resolve("public", baseFolder, requestedSubfolder);
    
    console.log("Folder path:", folderPath);

    try {
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
      }
      cb(null, folderPath);
    } catch (err) {
      cb(new Error("Gagal membuat folder upload: " + err.message), "");
    }
  },

  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueName + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedMime = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "application/pdf",
  ];

  if (allowedMime.includes(file.mimetype)) {
    return cb(null, true);
  }

  cb(
    new Error(
      "Hanya file JPG, JPEG, PNG, atau PDF yang diperbolehkan."
    )
  );
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});

export default upload;