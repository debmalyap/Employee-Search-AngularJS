var app = angular.module('app', ['ngAnimate', 'ngAria', 'ngMessages', 'ngMaterial']);
app.controller('DemoCtrl1', function ($timeout, $q, $log, $scope) {


    $scope.isDisabled = false;

  
    $scope.studentArray =
        [
            {
                studentId: 104,
                studentName: "Arup",
                studentAge: 22,
                studentDept: "CSE",
                studentGrade: "O",
                studentAddress: "USA"
            },
            {
                studentId: 106,
                studentName: "Kaustuv",
                studentAge: 24,
                studentDept: "IT",
                studentGrade: "A+",
                studentAddress: "UK"
            },
            {
                studentId: 108,
                studentName: "Nilanjan",
                studentAge: 26,
                studentDept: "ECE",
                studentGrade: "AA",
                studentAddress: "India"
            },
            {
                studentId: 110,
                studentName: "Soumyadeep",
                studentAge: 23,
                studentDept: "CSE",
                studentGrade: "A",
                studentAddress: "India"
            }
        ];


  
    $scope.searchStudents = function (inputText) {
        $scope.newStudents = [];
        for (var i = 0; i < $scope.studentArray.length; i++) {
            if ($scope.studentArray[i].studentName.includes(inputText)) {
                $scope.newStudents.push($scope.studentArray[i]);
            }
        }
        return $scope.newStudents;
    };

   
    $scope.selectedStudentsName = function ($students) {
        if ($students !== undefined) {
            $scope.myStudents = $students;
        }
    };


    


});