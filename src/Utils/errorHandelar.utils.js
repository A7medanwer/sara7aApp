const glopalErorrHandelar = async (err, req, res, next) => {
  const status = err.cause || 500;
  res.status(status).json({
    message: "glopal erorr handelar",
    err: err.message,
    stack: err.stack,
  });
};
export default glopalErorrHandelar;
