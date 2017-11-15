import Realm from 'realm';

class Token extends Realm.Object {}
Token.schema = {
  name: 'Token',
  properties: {
    accessToken: {type: 'string'},
    refreshToken: {type: 'string'}
  }
}

export default Token;