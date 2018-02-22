import { TokenService } from '../src/token.service';
import { debug } from 'util';


describe('Token service', function () {
    it('Default Auth endpoint', function () {
        expect(TokenService._apiUrl).toBeNull();
    });

    it('Change Auth endpoint', function () {
        var apiTokenUrl = 'http://auth.api.desarrollo.corp/Token';
        TokenService.setApiUrl(apiTokenUrl);

        expect(TokenService._apiUrl).toEqual(apiTokenUrl);
    });

    it('Required Api url', function () {
        expect(function () { TokenService.getToken() }).toThrow();
    });

    it('Required credentials', function () {
        var apiTokenUrl = 'http://auth.api.desarrollo.corp/Token';
        TokenService.setApiUrl(apiTokenUrl);

        let data = {
            username: "",
            password: "",
            appid: ""
        }

        expect(function () { TokenService.getToken(data.username, data.password, data.appid) }).toThrow();
    });

    // it('Needs to get token', async function () {
    //     var apiTokenUrl = 'http://auth.api.desarrollo.corp/Token';
    //     TokenService.setApiUrl(apiTokenUrl);

    //     let data = {
    //         username: "jguerola",
    //         password: "jguerola",
    //         appid: "3"
    //     }

    //     var tokenResult = null;

    //     var promise = TokenService.getToken(data.username, data.password, data.appid).then(function (response) {
    //         tokenResult = response;
    //     });

    //     await promise;

    //     expect(tokenResult).not.toBeNull();
    // });
});