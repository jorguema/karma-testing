import { TokenService } from '../src/token.service';


describe('Token service', function() {
  it('Default Auth endpoint', function() {    
    let tokenService = new TokenService();

    expect(tokenService._apiUrl).not.toBeNull();
  });

  it('Change Auth endpoint', function() {
    let tokenService = new TokenService();
    var apiTokenUrl = 'http://auth.api.corp/Token';    
    tokenService.setApiUrl(apiTokenUrl);

    expect(tokenService._apiUrl).toEqual(apiTokenUrl);
  });

  it('Needs credentials', function() {    
    let data = {
        username: "",
        password: "",
        appid: ""
    }
    
    let tokenService = new TokenService();
    var promise = tokenService.token(data.username, data.password, data.appid);
    
    expect(promise).toBeNull();
  });

  // it('Needs to get token', async function() {
  //   let data = {
  //       username: "jguerola",
  //       password: "jguerola",
  //       appid: "3"
  //   }
    
  //   let tokenService = new TokenService();
  //   var tokenResult = null;
    
  //   var promise = tokenService.token(data.username, data.password, data.appid).then(function(response) {
  //       if(response.error) { console.log(response.error); return; }
  //       tokenResult = response;
  //       debugger;
  //       console.log(response); 
  //   });
  //   await promise;
    
  //   expect(tokenResult).not.toBeNull();
  // });
});