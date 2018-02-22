import { RequestService } from './request.service';
import { ErrorService } from './error.service'

class tokenService {

    constructor() {
        this._apiUrl = null;
    }

    setApiUrl(apiUrl) {
        this._apiUrl = apiUrl;
    }

    getToken(username, password, appid) {
        if (!this._apiUrl) new ErrorService().throwError("Api url required");
        if (!username || !password || !appid) new ErrorService().throwError("Username, Password and Appid required");        

        let bodyParams = {
            'login': username,
            'password': password,
            'appID': appid
        };

        return RequestService.post(this._apiUrl, bodyParams);
    }
}

export let TokenService = new tokenService();