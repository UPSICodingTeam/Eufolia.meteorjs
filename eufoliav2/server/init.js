import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
//tuts on setting up email in meteor using mailgun.org: https://themeteorchef.com/tutorials/using-the-email-package
  process.env.MAIL_URL = '/****REDACTED CODE****/';
});
