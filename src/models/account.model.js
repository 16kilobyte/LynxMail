import Realm from 'realm';
import Token from './token.model';
import Model from './model';

class Account extends Model {
  static schema = {
    name: 'Account',
    primaryKey: 'id',
    properties: {
      id: {type: 'string', optional: false, indexed: true},
      token: {type: 'Token'},
      name: {type: 'string', optional: false},
      email: {type: 'string', optional: false}
    }
  };
}

export default Account;