var hzLogoutFunc = function(){
  FlowRouter.go('/'); 
}

AccountsTemplates.configure({
  homeRoutePath: '/home',
  privacyUrl: 'privacy',
  termsUrl: 'terms-of-use',
  showForgotPasswordLink: true,
  texts: {
        errors: {
            //accountsCreationDisabled: "Client side accounts creation is disabled!!!",
            //cannotRemoveService: "Cannot remove the only active service!",
            //captchaVerification: "Captcha verification failed!",
            //loginForbidden: "error.accounts.Login forbidden",
            //mustBeLoggedIn: "error.accounts.Must be logged in",
            //pwdMismatch: "error.pwdsDontMatch",
            //validationErrors: "Validation Errors",
            //verifyEmailFirst: "Please verify your email first. Check the email and follow the link!",
        }
    },
  onLogoutHook : hzLogoutFunc
});

AccountsTemplates.addFields([
  {
    _id: 'firstName',
    type: 'text',
    displayName: 'First Name',
    required: true,
    placeholder: 'Enter your first name'
  }, {
    _id: 'lastName',
    type: 'text',
    displayName: 'Last Name',
    required: true,
    placeholder: 'Enter your last name'
  }
]);
