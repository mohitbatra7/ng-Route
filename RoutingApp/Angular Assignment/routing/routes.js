// $routeProvider - Angular Define , it provide the routing information
app.config(function($routeProvider){
   $routeProvider.when('/post/:type', {
                templateUrl : '../pages/postdata.html',
                controller  : 'datacontroller'
    })
   .when('/comment/:type', {
                templateUrl : '../pages/commentdata.html',
                controller  : 'datacontroller'
    });
   
});