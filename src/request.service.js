let ctrl = null;
export class RequestService {

    constructor() {
        ctrl = this;
        this._apiUrl = null;
        this._bearerToken = null;
    }

    setApiUrl(apiUrl) {
        this._apiUrl = apiUrl;
    }

    setBearerToken(token) {
        this._bearerToken = token; 
    }

    get(url) {
        return new Promise(
            function (resolve, reject) {
                var request = new XMLHttpRequest();
                request.onload = function (e) {
                    if (request.readyState === 4) {
                        if (request.status === 200) {
                            resolve(JSON.parse(request.response))
                        } else {
                            reject(Error(request.response));
                        }
                    }
                }

                request.open('GET', ctrl._apiUrl + url);
                if (ctrl._bearerToken) {
                    request.setRequestHeader("Authorization", "Bearer " + ctrl._bearerToken);
                }
                request.send();
            });
    }

    post(url, params) {

        return new Promise(
            function (resolve, reject) {
                var request = new XMLHttpRequest();
                request.onload = function (e) {
                    if (request.readyState === 4) {
                        if (request.status === 200) {
                            resolve(JSON.parse(request.response))
                        } else {
                            reject(Error(request.response));
                        }
                    }
                }

                request.open('POST', ctrl._apiUrl + url);
                if (ctrl._bearerToken) {
                    request.setRequestHeader("Authorization", "Bearer " + ctrl._bearerToken);
                }
                request.setRequestHeader("Content-type", "application/json");
                request.send(JSON.stringify(params));
                
            });
    }
}

export let requestService = new RequestService();