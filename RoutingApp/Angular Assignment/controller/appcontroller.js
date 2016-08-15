app.controller("appcontroller",function($scope,dataService,dataFactory,$rootScope){
$scope.formData={};
    $rootScope.data=[];
	$rootScope.submitteddata=[];
	
   /*var promise = dataFactory.getData();*/
                       /* var   obj=    datacontroller.success();*/
    $scope.submitTheForm=function(){
        console.log($scope.formData.name);
		console.log(JSON.stringify($scope.formData.userId))
        $rootScope.submitteddata.push({'userId':parseInt($scope.formData.userId),'id':parseInt($scope.formData.id),'title':$scope.formData.title,'body':$scope.formData.body}) ;
		
		$rootScope.data.push({'userId':parseInt($scope.formData.userId),'id':parseInt($scope.formData.id),'title':$scope.formData.title,'body':$scope.formData.body}) ;
     /*  var prom=dataFactory.getData(name);
    */
        
  var content={'userId':$scope.formData.userId,'id':$scope.formData.id,'title':$scope.formData.title,'body':$scope.formData.body} ;
        
         var promise =dataService.getData( content); 
    function success(data,status, headers, config){
        
        alert("data send successfully");   
    }
    function error(err,status, headers, config){
        $scope.error = err;
    }
    promise.then(success,error);
        
       
         /*   function success(data){
        $scope.data = data;
            console.log(data);
    }
    function error(err){
        $scope.error = err;
    }
    prom.then(success,error);*/
        
    }

                                          
   
    
});