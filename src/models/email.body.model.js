import Realm from 'realm';
import Model from './model';

class EmailBody extends Model {
  static schema = {
    name: 'EmailBody',
    properties: {
      contentType: {type: 'string', optional: false},
      content: {type: 'string', optional: false}
    }
  };
}
export default EmailBody;