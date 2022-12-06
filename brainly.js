const { Brainly } = require('brainly-scraper-v2');


const brainly = (query, jumlah) => {
    return new Promise((resolve, reject) => {
        const brain = new Brainly('id');
        brain.search(query, 'id', jumlah)
            .then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
    })
}

module.exports = brainly;