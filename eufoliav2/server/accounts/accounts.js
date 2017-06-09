var postSignUp = function(userId, info) {
  console.log(userId);
  console.log(info);
  Roles.addUsersToRoles(userId, 'normal');
}

AccountsTemplates.configure({
  postSignUpHook: postSignUp
});
