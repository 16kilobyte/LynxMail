
import Realm from 'realm';
import Model from './model';

class Email extends Model {
  static schema = {
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
      body: {type: 'EmailBody', optional: true},
      sender: {type: 'EmailAddress', optional: true},
      from: {type: 'EmailAddress', optional: true},
      toRecipients: {type: 'list', objectType: 'EmailAddress'},
      ccRecipients: {type: 'list', objectType: 'EmailAddress'},
      bccRecipients: {type: 'list', objectType: 'EmailAddress'},
      replyTo: {type: 'list', objectType: 'EmailAddress'},
      receivedDateTime: {type: 'date'},
      sentDateTime: {type: 'date'}
    }    
  };
}

export default Email;