const error500 = {
    status: 500,
    message: "something went wrong",
};

const error404 = {
    status: 404,
    message: "Selected Id doesn't exists!"
}

const error401 = {
    status: 401,
    message: "Invalid Credentials"
}

module.exports = {
    error500,
    error404,
    error401,
}