angular.module("filter",[])
   .filter("minOmax",function () {
       return function (origin,type) {
           if(type=="min") {
               for (var i = 0; i < origin.length; i++) {
                   var temp = origin[0];
                   if (origin[i] < temp) {
                       temp = origin[i]
                   }
               }
           }else if(type=="max"){
               for (var i = 0; i < origin.length; i++) {
                   var temp = origin[0];
                   if (origin[i] > temp) {
                       temp = origin[i]
                   }
               }
           }
       }


   })