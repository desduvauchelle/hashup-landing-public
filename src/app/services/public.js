angular.module('app.services.public', [])
    .factory('publicService', ['$http', 'CONFIG', function publicService($http, CONFIG) {

        var baseUrl = CONFIG.url;
        var results = {};


        results.contact = function (name, email, message){

        };

        return results;
    }]);