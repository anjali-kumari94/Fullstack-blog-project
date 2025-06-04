const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "fullstack-blog-project",
    allowed_formats: ["jpg", "png"], // fixed property name
  },
});

const upload = multer({ storage });
module.exports = upload;
