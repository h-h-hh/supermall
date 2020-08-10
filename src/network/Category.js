import { request } from './request'
export function getGoryMultidata() {
    return request({
        url: '/api/n3/category'
    })
}
export function getRightInfo(maitkey) {
    return request({
        url: 'api/n3/subcategory',
        params: {
            maitkey
        }
    })
}


// export function getRightInfo(maitkey) {
//     return request({
//         url: '/api/n3/subcategory',
//         params: {
//             maitkey
//         }
//     })
// }

// export function getSubcategory(maitKey) {
//     return request({
//         url: 'http://152.136.185.210:8000/api/n3/subcategory',
//         params: {
//             maitKey
//         }
//     })
// }

//http://152.136.185.210:8000/api/n3/subcategory?maitKey=582