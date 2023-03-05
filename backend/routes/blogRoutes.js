const express = require("express");
const router = express.Router();
const {
  getBlogs,
  getBlog,
  postBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogControllers");

router.get("/", getBlogs);
router.get("/:id", getBlog);
router.post("/", postBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
