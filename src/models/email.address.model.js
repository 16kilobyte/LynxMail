import Realm from 'realm';

class EmailAddress extends Realm.Object {}
EmailAddress.schema = {
  name: 'EmailAddress',
  properties: {
    name: {type: 'string', optional: false},
    address: {type: 'string', optional: false}
  }
}

export default EmailAddress;