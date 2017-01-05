angular.module("ctrl1",["sevices"])
.controller("index",["$scope","$http","$indexDate",function ($scope,$http,$indexDate) {
        $indexDate.then(function (data) {
        $scope.data=data.data
    })
}]).controller("list",["$scope","$http","$indexDate",function ($scope,$http,$indexDate) {

}]).controller("show",["$scope","$http","$indexDate",function ($scope,$http,$indexDate) {

}])