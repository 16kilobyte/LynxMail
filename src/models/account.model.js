import Realm from 'realm';

export class Account extends Realm.Object { }
Account.schema = {
  name: 'Account',
  primaryKey: 'type',
  properties: {
    type: {type: 'string', optional: false, indexed: true},
    token: {type: 'string', optional: false},
    name: {type: 'string', optional: false},
    email: {type: 'string', optional: false}
  }
}