const axios = require("axios");
const { API_KEY } = process.env;

const getApiData = async (req, res) => {
    const { platform, player } = req.body;
    try {
        const api = await axios.get(`https://api.mozambiquehe.re/bridge?version=5&platform=${platform}&player=${player}&auth=${API_KEY}`);
        console.log(api.data)
    } catch (err) {
        console.log(err.message)
        return err.message
    }
};

module.exports = getApiData;