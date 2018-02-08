import { RequestService } from '../src/request.service';

describe('Request service', function () {
    it('Empty token initialization', function () {
        var requestService = new RequestService();

        expect(requestService._apiUrl).toBeNull();
    });

    it('Empty endpoint initialization', function () {
        var requestService = new RequestService();

        expect(requestService._bearerToken).toBeNull();
    });

    it('Change endpoint', function () {
        const requestService = new RequestService();
        var apiTokenUrl = 'http://test.com/';
        requestService.setApiUrl(apiTokenUrl);

        expect(requestService._apiUrl).toEqual(apiTokenUrl);
    });

    it('Store token', function () {
        let requestService = new RequestService();
        var token = '=2bc772ja&';
        requestService.setBearerToken(token);

        expect(requestService._bearerToken).toEqual(token);
    });
});