var app = angular.module('app', ['ngAnimate', 'ngAria', 'ngMessages', 'ngMaterial']);
app.controller('DemoCtrl', function ($timeout, $q, $log, $scope) {

    
    $scope.isDisabled = false;

    



    $scope.employeeArray =
        [
            {
                empId: 10,
                empName: "Debmalya",
                gender: "Male",
                empAddress: "Jadavpur"
            },
            {
                empId: 11,
                empName: "Chandan",
                gender: "Male",
                empAddress: "Garia"
            },
            {
                empId: 12,
                empName: "Subhendu",
                gender: "Male",
                empAddress: "Salt lake"
            },
            {
                empId: 13,
                empName: "Satyaki",
                gender: "Male",
                empAddress: "Hooghly"
            }
        ];


    

    $scope.searchEmployee = function (text) {
        $scope.newEmployee = [];
        for (var i = 0; i < $scope.employeeArray.length; i++) 
        {
            if ($scope.employeeArray[i].empName.includes(text)) {
                $scope.newEmployee.push($scope.employeeArray[i]);
            }
        }

        return $scope.newEmployee;

        
    };

    $scope.selectedEmployeeName = function ($item) {
        if ($item !== undefined) {
            $scope.employee = $item;
        }
    };


    
});