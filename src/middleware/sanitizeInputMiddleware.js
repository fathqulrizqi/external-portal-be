const forbiddenPattern = /[<>{}*=;]/;

const sanitizeInput = (obj) => {
  for (const key in obj) {
    const value = obj[key];

    if (typeof value === "string") {
      if (forbiddenPattern.test(value)) {
        throw new Error(`Field "${key}" contains forbidden characters.`);
      }
    } else if (typeof value === "object" && value !== null) {
      sanitizeInput(value);
    }
  }
};

const sanitizeInputMiddleware = (req, res, next) => {
  try {
    sanitizeInput(req.body);
    sanitizeInput(req.query);
    sanitizeInput(req.params);
    next();
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default sanitizeInputMiddleware;