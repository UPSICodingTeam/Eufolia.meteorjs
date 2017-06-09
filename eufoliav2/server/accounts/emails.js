Accounts.emailTemplates.siteName = "Eupholia by UPSI";
Accounts.emailTemplates.from     = "Eupholia Admin <no-reply@eupholia.com>";

Accounts.emailTemplates.verifyEmail = {
  subject() {
    return "[Eupholia@UPSI] Please Verify Your Email Address";
  },
  text( user, url ) {
    let emailAddress   = user.emails[0].address,
        urlWithoutHash = url.replace( '#/', '' ),
        supportEmail   = "support@eupholia.com",
        emailBody      = `To verify your email address (${emailAddress}) visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

    return emailBody;
  }
};
