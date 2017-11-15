import Realm from 'realm';

class EmailBody extends Realm.Object {}
EmailBody.schema = {
  name: 'EmailBody',
  properties: {
    contentType: {type: 'string', optional: false},
    content: {type: 'string', optional: false}
  }
}

export default EmailBody;