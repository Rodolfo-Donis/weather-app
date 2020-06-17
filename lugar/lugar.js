const axios = require('axios');


const getLugarLAtLang = async(dir) => {
    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': 'c3dd5e2b48msh0cb8798b8c07093p10aa76jsnedd0bebd8ea2' }

    });

    const resp = await instance.get();
    if (resp.data.Results === null) {
        return {
            direccion: 'Ukraine',
            lat: '49.8397',
            lng: '24.0297'
        }
    } else {
        if (resp.data.Results.length === 0) {
            throw new Error(`No results for ${dir}`);

        }
        const data = resp.data.Results[0];
        const direccion = data.name;
        const lat = data.lat;
        const lng = data.lon;

        return {

            direccion,
            lat,
            lng
        }
    }
}

module.exports = {
    getLugarLAtLang
}