exports.getToken = () => {
    return (req, res) => {
        const username = req.query.name
        res.send(`Output fra Express via res.send via getToken ${username}`)
    }
}

