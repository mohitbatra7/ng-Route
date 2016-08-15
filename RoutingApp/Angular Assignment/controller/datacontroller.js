app.controller("datacontroller",function($scope,dataFactory,$routeParams,$rootScope){
   var promise =dataFactory.getData($routeParams.type); 
	/*var postData;*/
	
	
    function success(data){
		console.log('tyoe of data :'+typeof data);
		$rootScope.data=data;
		console.log("submitted data :"+JSON.stringify($rootScope.submitteddata));
		
	
		
		if($rootScope.submitteddata){
			
		for(var a in $rootScope.submitteddata){
			console.log(' what is in a:'+a+'typepe of:'+ typeof a);
			console.log("entered inloop");
			$scope.data2=$rootScope.data.concat($rootScope.submitteddata);
			$rootScope.data=[];
        //$rootScope.data.push($rootScope.submitteddata);
		}
		}
		else{
			$scope.data2=$rootScope.data;
		}
		$scope.data=$scope.data2;
		console.log("post data :"+typeof JSON.stringify($rootScope.data));
		
		/*$rootspostData=data;*/
		
    }
    function error(err){
        $scope.error = err;
    }
    promise.then(success,error);
    
});