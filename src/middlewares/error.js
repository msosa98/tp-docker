const handleError = (error, req, res, next) => {
    return res.status(error.status || 500).send({
        status: error.status || 500,
        message: error.message || 'Internal server error'
    });
};

module.exports = handleError;
