import { ErrorService } from './error.service'

class requestServiceFetch {

    constructor() {
        this._bearerToken = null;
    }

    setToken(token) {
        this._bearerToken = token;
    }

    get(url, requestConfig) {
        var config = Object.assign({
            url: url,
            method: 'GET'
        }, requestConfig);

        var request = this._generateRequest(config);

        return this._executeRequest(request);
    }

    post(url, bodyParams, requestConfig) {
        var config = Object.assign({
            url: url,
            method: 'POST'
        }, requestConfig);

        if (bodyParams) config.body = JSON.stringify(bodyParams);

        var request = this._generateRequest(config);

        return this._executeRequest(request);
    }

    put() {
        var config = Object.assign({
            url: url,
            method: 'PUT'
        }, requestConfig);

        if (bodyParams) config.body = JSON.stringify(bodyParams);

        var request = this._generateRequest(config);

        return this._executeRequest(request);
    }

    delete() {
        var config = Object.assign({
            url: url,
            method: 'DELETE'
        }, requestConfig);

        var request = this._generateRequest(config);

        return this._executeRequest(request);
    }

    _executeRequest(request) {
        return new Promise((resolve, reject) => {
            fetch(request).then(function (response) {
                if (response.status == 200)
                    resolve(response.json())
                else
                    reject(response)
            }).catch(function (err) {
                reject(err)
            });
        });
    }

    _generateRequest(config) {
        if (!config.url) new ErrorService().throwError("Endpoint required");

        var request = new Request(config.url, {
            method: config.method || 'GET',
            mode: config.mode || 'cors',
            headers: config.headers || new Headers({
                'Content-Type': 'application/json'
            }),
            body: config.body || undefined
        });

        if (this._bearerToken) {
            request.headers.set("Authorization", 'Bearer ' + this._bearerToken);
        }

        return request;
    }

}

export let RequestService = new requestServiceFetch();