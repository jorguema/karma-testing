import { RequestService } from '../src/request.service';
import "whatwg-fetch";

describe('Request service', function () {
    it('Empty token initialization', function () {
        expect(RequestService._bearerToken).toBeNull();
    });

    it('Require url', function () {
        expect(function () { RequestService.get() }).toThrow();
    });

    it('Empty endpoint initialization', function () {
        expect(RequestService._bearerToken).toBeNull();
    });

    it('Store token', function () {
        var token = '=2bc772ja&';
        RequestService.setToken(token);
        expect(RequestService._bearerToken).toEqual(token);
    });

    // it('Method expect return promise', function () {
    //     var promise = RequestService.get("http//www.google.es")
    //     expect(promise["then"]).not.toBeNull();
    // });
 

    // it('Method post', async function () {
    //     RequestService.setToken(null);
    //     var token = null;

    //     var promise = RequestService.post("http://auth.api.desarrollo.corp/Token", {
    //         "Login": "jguerola",
    //         "Password": "jguerola",
    //         "AppId": 3
    //     }).then(function (response) {
    //         token = response;
    //     }, function (err) {

    //     });

    //     await promise;
    //     expect(token).not.toBeNull();
    // });

    // it('Method get', async function () {
    //     RequestService.setToken("Wkh2OHMxcS9QVXVLeGpXakFuWHpNQjNPTXhoTldMb0pZaHZVdkdncjBIWT06My1qZ3Vlcm9sYTo2MzY1NDg4NTc5MTYxNDQyNzM=");
    //     var user = null;

    //     var promise = RequestService.get("http://apiimport.nclogistics.desarrollo.corp/api/User/GetUser").then(function (response) {
    //         user = response.data;
    //     }, function (err) {

    //     });

    //     await promise;
    //     expect(user).not.toBeNull();
    // });

    // it('Method post wrong call', async function () {
    //     RequestService.setToken("Wkh2OHMxcS9QVXVLeGpXakFuWHpNQjNPTXhoTldMb0pZaHZVdkdncjBIWT06My1qZ3Vlcm9sYTo2MzY1NDg4NTc5MTYxNDQyNzM=");
    //     var messageType = null;
    //     var data = {
    //         "Id": 0,
    //         "IdEmpresa": 0,
    //         "IdDelegacionBD": 0,
    //         "IdDelegacion": 0,
    //         "IoE": "string",
    //         "CodigoOT": "string"
    //     }

    //     var promise = RequestService.post("http://apiimport.nclogistics.desarrollo.corp/api/TaskOrder/DeleteTaskOrder", data).then(function (response) {
    //         messageType = response.Messages[0].MessageType
    //     }, function (err) {

    //     });

    //     await promise;
    //     expect(messageType).toBe(3);
    // });
});