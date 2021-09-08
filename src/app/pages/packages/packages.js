angular.module('app.pages.packages', [
        'ui.router'
    ])
    // Configure the state for navigation
    .config(['$stateProvider', function config($stateProvider) {
        $stateProvider.state('packages', {
            url: '/packages/:type',
            views: {
                "main": {
                    controller: 'PackagesCtrl',
                    templateUrl: 'pages/packages/packages.tpl.html'
                }
            },
            data: {
                pageTitle: 'Packages'
            }
        });
    }])

// Controller
.controller('PackagesCtrl', ['$scope', '$stateParams', function PackagesCtrl($scope, $stateParams) {
    $scope.options = [{
        name: "Design",
        key: "design",
        helpText: "",
        selected: false,
        pricePerPage: 100,
        timePerPage: 1
    },{
        name: "Frontend",
        key: "frontend",
        helpText: "What the user sees...",
        selected: true,
        pricePerPage: 150,
        timePerPage: 1
    },{
        name: "Backend",
        key: "backend",
        helpText: "To store info/users...",
        selected: true,
        pricePerPage: 200,
        timePerPage: 1
    }];

    $scope.appSamples = [{
        icon: "desktop",
        name: "Some past projects",
        apps: [{
            name: "Hashup",
            link: "http://www.hashup.io",
            pages:{
                backend: 0,
                website: 10,
                iphone: 0
            }
        }, {
            name: "Twoodo",
            link: "https://www.twoodo.com/",
            pages:{
                backend: 20,
                website: 30,
                iphone: 20
            }
        }, {
            name: "Babygotchi",
            link: "http://babygotchi.hashup.io",
            pages:{
                backend: 5,
                website: 5,
                iphone: 20
            }
        }, {
            name: "Aiglon Limousine",
            link: "http://www.aiglon-transfert.com",
            pages:{
                backend: 0,
                website: 14,
                iphone: 0
            }
        }, {
            name: "GifGifGifGif",
            link: "http://www.gifgifgifgifgif.com",
            pages:{
                backend: 3,
                website: 4,
                iphone: 0
            }
        }]
    },{
        icon: "users",
        name: "Social networking",
        apps: [{
            name: "Facebook \"like\"",
            pages:{
                backend: 25,
                website: 25,
                iphone: 25
            }
        }, {
            name: "Tinder \"like\"",
            pages:{
                backend: 20,
                website: 20,
                iphone: 20
            }
        }, {
            name: "Pinterest \"like\"",
            pages:{
                backend: 30,
                website: 30,
                iphone: 30
            }
        }]
    }, {
        icon: "comments",
        name: "Messaging",
        apps: [{
            name: "iMessage \"like\"",
            pages:{
                backend: 7,
                website: 5,
                iphone: 5
            }
        }, {
            name: "Whatsapp \"like\"",
            pages:{
                backend: 14,
                website: 10,
                iphone: 15
            }
        }, {
            name: "Slack \"like\"",
            pages:{
                backend: 25,
                website: 15,
                iphone: 10
            }
        }]
    }];

    // $scope.pricingEstimate = function(numberOfPages){
    //     var requirementsPricing = 0;
    //     for(var i =0; i < $scope.options.length;i++){
    //         if($scope.options[i].selected){
    //             requirementsPricing += $scope.options[i].pricePerPage;
    //         }
    //     }
    //     var pricing = numberOfPages * requirementsPricing;
    //     pricing = pricing/1000;
    //     return "$"+pricing+"K";
    // };
    $scope.pricing = function(pages, optionKey){
        var pricing = 0;
        for(var i =0; i < $scope.options.length;i++){
            if($scope.options[i].selected){
                if($scope.options[i].key !== "backend"){
                    if(optionKey === "both"){
                        pricing += $scope.options[i].pricePerPage * (pages.iphone + pages.website);
                    } else if (optionKey === "iphone"){
                        pricing += $scope.options[i].pricePerPage * pages.iphone;
                    } else if (optionKey === "website"){
                        pricing += $scope.options[i].pricePerPage * pages.website;
                    }
                } else {
                    if(optionKey === "both" || (optionKey === "iphone" && pages.iphone !== 0) || (optionKey === "website" && pages.website !== 0)){
                        pricing += $scope.options[i].pricePerPage * pages.backend;
                    }
                }
            }
        }
        pricing = pricing/1000;
        return "$"+pricing+"K";
    };
    $scope.timingEstimate = function(pages, optionKey){
        var time = 0;
        for(var i =0; i < $scope.options.length;i++){
            if($scope.options[i].selected){
                if($scope.options[i].key !== "backend"){
                    if(optionKey === "both"){
                        time += $scope.options[i].timePerPage * (pages.iphone + pages.website);
                    } else if (optionKey === "iphone"){
                        time += $scope.options[i].timePerPage * pages.iphone;
                    } else if (optionKey === "website"){
                        time += $scope.options[i].timePerPage * pages.website;
                    }
                } else {
                    if(optionKey === "both" || (optionKey === "iphone" && pages.iphone !== 0) || (optionKey === "website" && pages.website !== 0)){
                        time += $scope.options[i].timePerPage * pages.backend;
                    }
                }
            }
        }
        return " - "+time+"days";
    };


    var packageType = $stateParams.type;

    $scope.showSection = function(section) {
        if (packageType === "" && section === "selector") {
            return true;
        }
        return (packageType === section);
    };
}]);
