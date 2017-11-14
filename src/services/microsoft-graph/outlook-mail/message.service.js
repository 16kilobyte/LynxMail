import axios from 'axios';
import { getAccessToken, TypeAccount } from '../../../actions/account.action'

const ENDPOINT = 'https://graph.microsoft.com/v1.0/me'

export const listMessages = () => {
  return axios({
    url: `${ENDPOINT}/messages`,
    timeout: 300,
    method: 'get',
    responseType: 'json',
    headers: { 
      Authorization: `Bearer ${getAccessToken(TypeAccount.outlook)}`
    }
  });
}