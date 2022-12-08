// const { igApi, isIgPostUrl } = require('insta-fetcher');

// const ig = new igApi('ig_did=2EED65C8-1B84-4DAE-AC91-777C174CCE3E; mid=Y2HgzwALAAFN5x1vK_8t5wYs4MZv; datr=NeFhY48NxywBRq8qH6e2bFdQ; dpr=1.5; shbid="13165\05454094049310\0541700314547:01f731807c50c6cb800a8b57ca2172f140c39eeb47142beebe6273a2b8ec7cb130419fdb"; shbts="1668778547\05454094049310\0541700314547:01f79bddb953cc09bc6ed5cd63a805bff5da2203c908174d4b494d9530dfabbff98d4b16"; csrftoken=3wzXM2WMP5nL8jADRMkLL9vSY0ed1JkK; rur="EAG\05454094049310\0541700319870:01f75631f5a615fdfc529e79df9120dd51ce113d49a6e41615e5ce8f8d68536721d92c42"; ds_user_id=54094049310; sessionid=54094049310%3AzPU850v6cCwmXA%3A22%3AAYdMDs4wpt2t1cuRZ-0UWTm97velusGAZQmnQYlLDA', true)

// // getCookie('staz_yu', 'Staz1234')
// //     .then((res) => {
// //         console.log(res.data);
// //     }).catch((err) => {
// //         console.log(err);
// //     });

// // ig.fetchPost('https://www.instagram.com/reel/ClGrSQULsiD/?utm_source=ig_web_copy_link')
// // ig.fetchPost('https://www.instagram.com/p/ClGm3H4jsN8/?utm_source=ig_web_copy_link')
// const instagramFetcher = (url) => {
//     return new Promise((resolve, reject) => {
//         ig.fetchPost(url)
//             .then((res) => {
//                 console.log(res);
//                 resolve(res);
//             }).catch((err) => {
//                 if (err.response.status === 404) {
//                     return reject(new Error('Postingan/Status on Private!'))
//                 }
//                 return err.response
//             });
//     });
// }

// module.exports = instagramFetcher;