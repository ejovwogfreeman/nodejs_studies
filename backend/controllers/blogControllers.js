const Blog = require("../models/blogModels");

////////////////////////////////////////////
//////////////getting all blogs/////////////
////////////////////////////////////////////
const getBlogs = async (req, res) => {
  const blogs = await Blog.find();
  await res.status(200).send(blogs);
};

////////////////////////////////////////////
//////////////getting a single//////////////
////////////////////////////////////////////
const getBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  await res.status(200).send(blog);
};

////////////////////////////////////////////
//////////////posting a blog////////////////
////////////////////////////////////////////
const postBlog = async (req, res) => {
  const { title, body } = req.body;

  if (!title || !body) {
    await res.status(400).send({ mesage: "please enter all fields" });
  } else {
    const blog = new Blog({
      title,
      body,
    });

    await blog.save();

    await res.status(200).send({ message: "blog post added successfully" });
  }
};

////////////////////////////////////////////
//////////////updating a blog///////////////
////////////////////////////////////////////
const updateBlog = async (req, res) => {
  const { title, body } = req.body;
  const blog = await Blog.findByIdAndUpdate(req.params.id, { title, body });
  await res.status(200).send({ message: "blog post updated successfully" });
};

////////////////////////////////////////////
//////////////deleting a blog///////////////
////////////////////////////////////////////
const deleteBlog = async (req, res) => {
  const { title, body } = req.body;
  const blog = await Blog.findByIdAndDelete(req.params.id, { title, body });
  await res.status(200).send({ message: "blog post deleted successfully" });
};

module.exports = {
  getBlogs,
  getBlog,
  postBlog,
  updateBlog,
  deleteBlog,
};
