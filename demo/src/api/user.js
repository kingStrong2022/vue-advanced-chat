const axios = require('axios').default
const env = require('./env')

let baseUrl = process.env.VUE_APP_BASE_URL
console.debug('base-url:', process.env.VUE_APP_BASE_URL)

// nextdo:环境变量中写入服务器BASE_LOC
export async function getCsAndAdmins(userId) {
  return axios.get(`${baseUrl}/config/${userId}`)
}

export async function getAdminIdOrAgentId(token) {
  return axios.get(`${baseUrl}`)
}

export async function getUserToken(userId) {
  let response = await axios.get(`${env.BASE_URL}/user/cs/auth/${userId}`);
  return response.data;
}
