import moment from 'moment';

const mailAddress = (data) => {
  return {
    name: data.name || "",
    address: data.address || ""
  };
}

export const json = (data) => {
  return {
    id: data.id,
    accountId: 'outlook',
    hasAttachments: data.hasAttachments,
    subject: data.subject.replace(/\s+/g,' ').trim(),
    bodyPreview: data.bodyPreview.replace(/\s+/g,' ').trim(),
    isRead: data.isRead,
    isDraft: data.isDraft,
    body: {
      contentType: data.body.contentType,
      content: data.body.content
    },
    sender: mailAddress(data.sender.emailAddress),
    from: mailAddress(data.from.emailAddress),
    toRecipients: data.toRecipients.map((toRec) => { return mailAddress(toRec.emailAddress); }),
    ccRecipients: data.ccRecipients.map((ccRec) => { return mailAddress(ccRec.emailAddress); }),
    bccRecipients: data.bccRecipients.map((bccRec) => { return mailAddress(bccRec.emailAddress); }),
    replyTo: data.replyTo.map((repTo) => { return mailAddress(repTo.emailAddress); }),
    receivedDateTime: moment(data.receivedDateTime).toDate(),
    sentDateTime: moment(data.sentDateTime).toDate()
  }
};