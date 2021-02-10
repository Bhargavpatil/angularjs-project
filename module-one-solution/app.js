(function() {
    'use strict';

    angular.module('LunchApp', [])
        .controller('LunchCheck', LunchCheck);

    LunchCheck.$inject = ['$scope'];

    function LunchCheck($scope) {
        $scope.foodList = '';
        $scope.notice = '';
        $scope.checked = false;

        $scope.checkLunch = function() {
            if ($scope.foodList.trim().length === 0) {
                $scope.empty = true;
            } else {
                $scope.checked = true;
                $scope.empty = false;
                var foodList = $scope.foodList.split(',');
                var nonEmptyFoodList = foodList.filter(function(v) {
                    return v.trim() !== '';
                });
                
                if (nonEmptyFoodList.length <= 3) {
                    $scope.notice = 'Enjoy!';
                } else {
                    $scope.notice = 'Too much!';
                }
            }
        };
    }
})();