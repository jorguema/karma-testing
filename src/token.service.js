
import { requestService } from './request.service';

export class TokenService {

    constructor() {
        this._apiUrl = "http://auth.api.desarrollo.corp/Token";       //default
    }

    setApiUrl(apiUrl) {
        this._apiUrl = apiUrl;
    }

    token(username, password, appid) {
        if(!username || !password || !appid) return null;
        
        let params = {
            'login': username,
            'password': password,
            'appID': appid
        };

        /*
        var options = {
            method: 'POST',
            uri: this._apiUrl,
            form: params,
            json: true
        };
        
        return request(options)
            .then(function (token) {
                return token;
            })
            .catch(function (err) {
                return err;
            });*/

        requestService.setApiUrl(this._apiUrl);
        return requestService.post('', params).then((token) => {
            requestService.setBearerToken(token);
            return token;
        });   

    }

}

export let tokenService = new TokenService();
