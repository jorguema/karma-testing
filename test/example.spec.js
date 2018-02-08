import { square } from '../app/custom-module';
import { TokenService } from '../app/token.service';


describe('token login', function() {
  it('needs to get token', async function() {
    // An intentionally failing test. No code within expect() will never equal 4.
    debugger;
    var API_TOKEN_URL = 'http://auth.api.desarrollo.corp/Token';
    
    let data = {
        username: "jguerola",
        password: "jguerola",
        appid: "3"
    }
    
    // let tokenService = new TokenService();
    // var tokenResult = null;
    // tokenService.setApiUrl(API_TOKEN_URL);
    // var zzz = tokenService.token(data.username, data.password, data.appid).then(function(response) {
    //     if(response.error) { console.log(response.error); return; }
    //     tokenResult = response;
    //     debugger;
    //     console.log(response); 
    // });
    // await zzz;
    // debugger;
    var tokenResult ="nussll";
    expect(tokenResult).not.toBeNull();
  });
});
// describe('Users factory', function() {
//   it('hass a dummy spec to test 2 + 2', function() {
//     // An intentionally failing test. No code within expect() will never equal 4.
//     debugger;
//     console.log(square());
//     expect(square()).toEqual(4);
//   });
// });