
const mailAddress = (data) => {
  return {
    name: data.name,
    address: data.address
  };
}

export const json = (data) => {
  return {
    id: data.id,
    accountId: 'outlook',
    hasAttachments: data.hasAttachments,
    subject: data.subject,
    bodyPreview: data.bodyPreview,
    isRead: data.isRead,
    isDraft: data.isDraft,
    body: {
      contentType: data.body.contentType,
      content: data.body.content
    },
    sender: data.sender,
    from: mailAddress(data.from),
    toRecipients: data.toRecipients.map((toRec) => { return mailAddress(toRec); }),
    ccRecipients: data.ccRecipients.map((ccRec) => { return mailAddress(ccRec); }),
    bccRecipients: data.bccRecipients.map((bccRec) => { return mailAddress(bccRec); }),
    replyTo: data.replyTo.map((repTo) => { return mailAddress(repTo); })
  }
};