app.controller('apiKeyCtrl', ['$scope', 'apiKeyService', 'styleService', function($scope, apiKeyService, styleService) {
    // Getters e setters das cores
    $scope.getBackgroundColor = function () {
	return styleService.getBackgroundColor();
    };
    $scope.getHeaderColor = function () {
	return styleService.getHeaderColor();
    };
    
    $scope.showOkMsg = false;
    $scope.showApiKeyMsg = false;
    $scope.showEncKeyMsg = false;

    $scope.apiKey = "";
    $scope.encryptionKey = "";    

    $scope.success = function() {
	apiKeyService.addApiKey($scope.apiKey);
	apiKeyService.addEcryptionKey($scope.encryptionKey);
	console.log(apiKeyService.getApiKey());
	console.log(apiKeyService.getEncryptionKey());
	$scope.showOkMsg = true;
    }    
}]);
