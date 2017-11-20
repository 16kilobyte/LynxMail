import Realm from 'realm';

class EmailAddress extends Realm.Object {}
EmailAddress.schema = {
  name: 'EmailAddress',
  properties: {
    name: {type: 'string'},
    address: {type: 'string'}
  }
}

export default EmailAddress;