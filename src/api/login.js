import request from '@/utils/request'

// export function login(username, password) {
//   return request({
//     url: '/user/login',
//     method: 'post',
//     data: {
//       username,
//       password,
//       // strUserName: username,
//       // passWord: password
//     }
//   })
// }

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
export function login(username, password) {
  return request({
    url: '/system/login',
    method: 'post',
    data: {
      strUserName: username,
      passWord: password
    }
  })
}