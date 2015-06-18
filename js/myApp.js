var thisApp = angular.module('demo', []);

thisApp.controller('MyCtrl', function($scope) {

  $scope.himher = 'her';
  $scope.heshe = 'she';

  $scope.female_name = '';
  $scope.job_title = '';
  $scope.tedious_task = '';
  $scope.dirty_task = '';
  $scope.celebrity = '';
  $scope.useless_skill = '';
  $scope.adjective = '';
  $scope.obnoxious_celebrity = '';
  $scope.huge_number = '';

  $scope.showInput = true;

  $scope.showOutput = false;

  $scope.male = function () {
    $scope.himher = 'him';
    $scope.heshe = 'he';
  };

  $scope.female = function () {
    $scope.himher = 'her';
    $scope.heshe = 'she';
  };

  $scope.showOutputParagraph = function() {
    $scope.showOutput = true;
    $scope.showInput = false;
  }

  $scope.showInputs = function() {
      $scope.female_name = '';
      $scope.job_title = '';
      $scope.tedious_task = '';
      $scope.dirty_task = '';
      $scope.celebrity = '';
      $scope.useless_skill = '';
      $scope.adjective = '';
      $scope.obnoxious_celebrity = '';
      $scope.huge_number = '';
      $scope.showOutput = false;
      $scope.showInput = true;
  }

  });
