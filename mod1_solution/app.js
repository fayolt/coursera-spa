(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.lunch_menu = "";
  $scope.message = "";
  $scope.colour = "";

  $scope.displayMessage = function () 
  {
    if ($scope.lunch_menu == "")
    {
    	$scope.message = "Please enter data first!";
    }
    else
    {
    	var menu = $scope.lunch_menu.split(',').length;
    	var color = "";
    	if (menu <= 3)
    	{
    		$scope.message = "Enjoy!";
    		$scope.colour = "green";
    	}
    		
    	else
    	{
    		$scope.message = "Too much!";
    		$scope.colour = "red";
    	}
    		
    }

    return $scope.message;
    
  };
}

})();