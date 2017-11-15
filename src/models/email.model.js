
import Realm from 'realm';
import Token from './token.model';

class Email extends Realm.Object {}
Email.schema = {
  name: 'Email',
  primaryKey: 'id',
  properties: {
    id: {type: 'string', optional: false, indexed: true},
    accountId: {type: 'string', optional: false, indexed: true},
    hasAttachments: {type: 'bool'},
    subject: {type: 'string', optional: false},
    bodyPreview: {type: 'string', optional: false},
    isRead: {type: 'bool'},
    isDraft: {type: 'bool'},
    body: {type: 'EmailBody'},
    sender: {type: 'EmailAddress'},
    from: {type: 'EmailAddress'},
    toRecipients: {type: 'list', objectType: 'EmailAddress'},
    ccRecipients: {type: 'list', objectType: 'EmailAddress'},
    bccRecipients: {type: 'list', objectType: 'EmailAddress'},
    replyTo: {type: 'list', objectType: 'EmailAddress'}
  }
}

export default Email;