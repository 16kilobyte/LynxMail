import Realm from 'realm';

class Token extends Realm.Object {}
Token.schema = {
  name: 'Token',
  properties: {
    accessToken: {type: 'string'},
    refreshToken: {type: 'string'},
    expireIn: {type: 'int'}
  }
}

export default Token;