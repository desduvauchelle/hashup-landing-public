angular.module ('app.pages.started', [
    'ui.router'
])
    // Configure the state for navigation
    .config (['$stateProvider',function config ($stateProvider) {
                 $stateProvider.state ('started', {
                     url: '/started',
                     views: {
                         "main": {
                             controller: 'StartedCtrl',
                             templateUrl: 'pages/started/started.tpl.html'
                         }
                     },
                     data: {
                         pageTitle: 'Get started'
                     }
                 });
             }])

    // Controller
    .controller ('StartedCtrl', ['$scope', '$http', 'nzSwal', function StartedCtrl ($scope, $http, nzSwal) {
        $scope.message = {
            name: "",
            email: "",
            content: ""
        };

        $scope.showForm = true;
        $scope.sendMessage = function() {
            // Simple GET request example:
            var BASE_URL = "";

            if(window.location.hostname == 'localhost'){
                BASE_URL = "http://localhost/hashup/angular/build/";
            }
            $http({
                    method: 'POST',
                    url: BASE_URL+'assets/scripts/contact.php',
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
    }]);
