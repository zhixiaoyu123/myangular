angular.module("myapp",[])
    .directive("abc",function () {
        return{
            restrict:"A",
//            替换一个字段
//            template:"<div>123</div>",
            templateUrl:"demo.html",
//            把以前的内容放在内存中；
            transclude:true,
            scope:{
            },
            link:function ($scope,b,c) {
                $scope.data=[
                    {   name:"111",
                        son:[
                            {name:"1-111"},
                            {name:"1-222"},
                            {name:"1-333"}
                        ]
                    },
                    {   name:"222",
                        son:[
                            {name:"2-111"},
                            {name:"2-222"},
                            {name:"2-333"}
                        ]
                    },
                    {   name:"33",
                        son:[
                            {name:"3-111"},
                            {name:"3-222"},
                            {name:"3-333"}
                        ]
                    },
                ];
                $scope.a=0;
                $scope.change=function (id){
                    $scope.a=id;
                }
            }
        }
    })