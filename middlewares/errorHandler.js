const errorHandler = (err, req, res, next) => {
    console.log(err.stack)

    return res
        .status(err.status || 500)
        .json({
            statusCode: err.status,
            message: err.message
        })
}

export default errorHandler;