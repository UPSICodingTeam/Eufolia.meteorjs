import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
//tuts on setting up email in meteor using mailgun.org: https://themeteorchef.com/tutorials/using-the-email-package
  process.env.MAIL_URL = 'smtp://postmaster%40sandbox8322fda008c8485193f2b65e3ff1e703.mailgun.org:22ed13254dca23b95eb3aae09de4008c@smtp.mailgun.org:587';
});
