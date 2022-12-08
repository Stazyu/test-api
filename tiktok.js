const axios = require('axios');

const tiktokDl = (url) => {
    return new Promise((resolve, reject) => {
        const base_url = "https://www.tikwm.com";
        const config = {
            heders: {
                accept: "application/json, text/javascript, */*; q=0.01",
                "accept-encoding": "gzip, deflate, br",
                "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
                "content-length": 153,
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "cookie": "current_language=en",
                origin: "https://www.tikwm.com",
                referer: "https://www.tikwm.com/",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
            },
            data: {
                url,
                count: 12,
                cursor: 0,
                web: 1,
                hd: 1
            }
        }
        axios.post(base_url + '/api/', new URLSearchParams(Object.entries(config.data)), config.heders)
            .then((res) => {
                res.data.data.cover = base_url + res.data.data.cover;
                res.data.data.author.avatar = base_url + res.data.data.author.avatar;
                res.data.data.play = base_url + res.data.data.play;
                res.data.data.wmplay = base_url + res.data.data.wmplay;
                res.data.data.hdplay = base_url + res.data.data.hdplay;
                res.data.data.music = base_url + res.data.data.music;
                res.data.data.create_time_format = new Date(res.data.data.create_time * 1000).toLocaleDateString('id');
                resolve(res.data.data);
            }).catch((err) => {
                reject(err)
            });
    });
}

module.exports = tiktokDl;