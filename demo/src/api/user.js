const axios = require('axios').default

let baseUrl = process.env.BASE_API_URL

// nextdo:环境变量中写入服务器BASE_LOC
export async function getCsAndAdmins(userId) {
  return axios.get(`${baseUrl}/config/${userId}`)
}

export async function getAdminIdOrAgentId(token) {
  return axios.get(`${baseUrl}`)
}
