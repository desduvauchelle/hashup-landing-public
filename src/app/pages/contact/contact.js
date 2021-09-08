angular.module('app.pages.contact', [
        'ui.router'
    ])
    // Configure the state for navigation
    .config(['$stateProvider', function config($stateProvider) {
        $stateProvider.state('contact', {
            url: '/contact',
            views: {
                "main": {
                    controller: 'ContactCtrl',
                    templateUrl: 'pages/contact/contact.tpl.html'
                }
            },
            data: {
                pageTitle: 'Contact'
            }
        });
    }])

// Controller
.controller('ContactCtrl', ['$scope', 'publicService', '$http', 'nzSwal', function ContactCtrl($scope, publicService, $http, nzSwal) {

    $scope.message = {
        name: "",
        email: "",
        content: ""
    };

    $scope.showForm = true;
    $scope.sendMessage = function() {
        // Simple GET request example:


        $http({
                method: 'POST',
                url: 'assets/scripts/contact.php',
                data: $.param($scope.message), // pass in data as strings
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                } // set the headers so angular passing info as form data (not request payload)
            })
            .success(function(data) {

                if (!data.success) {
                    // if not successful, bind errors to error variables
                    nzSwal({
                        title: "Something went wrong",
                        type: "error",
                        showCancelButton: false,
                        confirmButtonColor: '#FF4545',
                        confirmButtonText: "I'll try again"
                    });
                    $scope.errorName = data.errors.name;
                    $scope.errorSuperhero = data.errors.superheroAlias;
                } else {
                    $scope.showForm = false;
                    // if successful, bind success message to message
                    nzSwal({
                        title: "Message sent!",
                        type: "success",
                        showCancelButton: false,
                        confirmButtonColor: '#FF4545',
                        confirmButtonText: "Great!"
                    });
                }
            });

    };

    $scope.$on('$viewContentLoaded', function() {
        // Content on the page is loaded
        console.log("Contact page loaded");
        // $scope.sendMessage();
    });
}]);
