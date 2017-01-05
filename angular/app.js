angular.module("app",["ngRoute","ngAnimate","ctrl1","sevices"])
.config(function ($routeProvider) {
    $routeProvider.when("/",{
        templateUrl:"demo1.html",
        controller:"index"
    }).when("/list/:id",{
        templateUrl:"list.html",
        controller:"list"
    }).when("/show/:id",{
        templateUrl:"show1.html",
        controller:"show"
    }).otherwise("/")
})