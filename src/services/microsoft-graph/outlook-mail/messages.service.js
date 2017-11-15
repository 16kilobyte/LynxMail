import axios from 'axios';
import { getAccessToken, TypeAccount } from '../../../actions/account.action'

const ENDPOINT = 'https://graph.microsoft.com/v1.0/me'

export const listMessages = () => {
  return getAccessToken('outlook')
    .then(token => {
      return axios({
        url: `${ENDPOINT}/messages`,
        timeout: 5000,
        method: 'get',
        responseType: 'json',
        headers: {
          Authorization: `Bearer ${token.accessToken}`
        }
      })
    })
}