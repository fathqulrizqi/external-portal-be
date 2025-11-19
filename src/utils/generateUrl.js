
import path from "path";

const generateUrlPath = (file) => {
  if (!file) {
    return null;
  }

  const filePath = file.path;
  const publicDir = path.resolve('public');

  const relativePath = path.relative(publicDir, filePath);
  let urlPath = relativePath.replace(/\\/g, '/');
  if (!urlPath.startsWith('/')) {
    urlPath = '/' + urlPath;
  }
  return urlPath;
};

export {generateUrlPath};