import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
  serverTokenEndpoint: "http://ec2-13-58-184-130.us-east-2.compute.amazonaws.com:3000/oauth/token"
});
