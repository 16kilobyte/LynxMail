import Realm from 'realm';
import Model from './model';

class Token extends Model {
  static schema = {
    name: 'Token',
    properties: {
      accessToken: {type: 'string'},
      refreshToken: {type: 'string'},
      expireIn: {type: 'int'}
    }
  };
}

export default Token;