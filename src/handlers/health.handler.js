const healthHandler = async (req, res) => {
  res.json({
    res: 'Server is up',
  }).status(200);
};

module.exports = {
  healthHandler,
};
