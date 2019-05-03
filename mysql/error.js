const error = {
    notFound: (response, error) => {
        response.status(404).send(error);
    },
    serverError: async (response, error) => {
        response.status(500).send(error);
    }
}

module.exports = error;