import Realm from 'realm';
import Model from './model';

class EmailAddress extends Model {
  static schema = {
    name: 'EmailAddress',
    properties: {
      name: {type: 'string'},
      address: {type: 'string'}
    }
  };
}

export default EmailAddress;