var app = angular.module('app', ['ionic']);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('tab/home');
  $stateProvider
    .state('tab', {
      cache: false,
      url: '/tab',
      abstract: false,
      templateUrl: 'static/template/index.html'
    })
    .state('tab.home', {
      cache: false,
      url: '/home',
      views: {
        '': {
          templateUrl: 'static/template/views/home.html'
        }
      }
    })
    .state('tab.photo', {
      cache: false,
      url: '/photo',
      views: {
        '': {
          templateUrl: 'static/template/views/photo.html'
        }
      }
    })
});

/*action sheet*/
app.controller("ActionSheet", ['$scope', '$ionicActionSheet', '$timeout', function ($scope, $ionicActionSheet, $timeout) {
  var array = [];
  for (var i = 0; i < 50; i++) {
    array.push(i);
  }

  $scope.items = array;

  $scope.show = function (index) {
    // Show the action sheet
    var hideSheet = $ionicActionSheet.show({
      buttons: [
        {text: '<b>Share</b> This'},
        {text: 'Move'}
      ],
      titleText: 'Modify your album ' + index,
      destructiveText: 'Delete',
      cancelText: 'Cancel',
      cancel: function () {
        console.info("cancel")
      },
      destructiveButtonClicked: function () {
        console.info("Delete");
        array.splice(index, 1);
        return true;
      },
      buttonClicked: function (index) {
        console.info(index);
        return true;
      }
    });

    $timeout(function () {
      hideSheet();
    }, 2000);
  };
}]);
