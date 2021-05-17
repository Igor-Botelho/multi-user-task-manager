module.exports = {
  urlConection:
    process.env.MONGODB_URL || "mongodb://localhost/multi-user-task-manager",
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
};
