import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  smtp = {
    username: 'mohd_hafiz',   // eg: server@gentlenode.com
    password: 'Nadhirah840820',   // eg: 3eeP1gtizk5eziohfervU
    server:   'smtp.gmail.com',  // eg: mail.gandi.net
    port: 465
  }

  process.env.MAIL_URL = 'smtps://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});
