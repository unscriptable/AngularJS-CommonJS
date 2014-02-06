var Firebase = require('Firebase');

module.exports = {
	ListCtrl: ListCtrl,
	CreateCtrl: CreateCtrl,
	EditCtrl: EditCtrl
};

function ListCtrl ($scope, Projects) {
  $scope.projects = Projects;
}

function CreateCtrl ($scope, $location, $timeout, Projects) {
  $scope.save = function() {
    Projects.$add($scope.project, function() {
      $timeout(function() { $location.path('/'); });
    });
  };
}

function EditCtrl ($scope, $location, $routeParams, $firebase, fbURL) {
    var projectUrl = fbURL + $routeParams.projectId;
    $scope.project = $firebase(new Firebase(projectUrl));

    $scope.destroy = function() {
      $scope.project.$remove();
      $location.path('/');
    };

    $scope.save = function() {
      $scope.project.$save();
      $location.path('/');
    };
};
