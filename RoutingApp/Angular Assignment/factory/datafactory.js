app.factory("dataFactory",function($http,$q){
    return {
        getData:function(name){
            var deferedObject = $q.defer();
            $http.get("http://jsonplaceholder.typicode.com/"+name).success(function(data){
                deferedObject.resolve(data);
            }).error(function(err){
                deferedObject.reject(err);
            });
            return deferedObject.promise;
        }
        
    }
});

//optional
app.service("dataService",function($http,$q){
   this.getData=function(dataform){
        console.log(dataform);
            var deferedObject = $q.defer();
            $http.post("http://jsonplaceholder.typicode.com/posts/", dataform ,{}).success(function(data, status, headers, config){
               console.dir(data);
                deferedObject.resolve(data);
            }).error(function(err, status, headers, config){
                deferedObject.reject(err);
            });
            return deferedObject.promise;
        }
    
});