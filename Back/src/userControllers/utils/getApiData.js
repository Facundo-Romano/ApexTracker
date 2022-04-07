const axios = require("axios");
const { API_KEY } = process.env;

const getApiData = async (platform, player) => {
    try {
        const { data } = await axios.get(`https://api.mozambiquehe.re/bridge?version=5&platform=${platform}&player=${player}&auth=${API_KEY}`);
        return { status: "ok", payload: data }
    } catch (err) {
        return { status: "error", payload: err.message }
    }
};

module.exports = getApiData;