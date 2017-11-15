import Realm from 'realm';

export class Token extends Realm.Object { }
Token.schema = {
  name: 'Token',
  properties: {
    accessToken: {type: 'string'},
    refreshToken: {type: 'string'}
  }
}