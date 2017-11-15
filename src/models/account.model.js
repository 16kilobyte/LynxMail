import Realm from 'realm';

export class Account extends Realm.Object { }
Account.schema = {
  name: 'Account',
  primaryKey: 'id',
  properties: {
    id: {type: 'string', optional: false, indexed: true},
    type: {type: 'string', optional: false},
    token: {type: 'Token'},
    name: {type: 'string', optional: false},
    email: {type: 'string', optional: false}
  }
}