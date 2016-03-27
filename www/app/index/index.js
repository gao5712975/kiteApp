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
    .state('tab.events', {
      cache: false,
      url: '/events',
      views: {
        '': {
          templateUrl: 'static/template/views/events.html'
        }
      }
    })
    .state('tab.list', {
      cache: false,
      url: '/list',
      views: {
        '': {
          templateUrl: 'static/template/views/list.html'
        }
      }
    })
});

/*action sheet*/
app.controller('ActionSheet', ['$scope', '$ionicActionSheet', '$timeout', function ($scope, $ionicActionSheet, $timeout) {
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

app.controller('Backdrop',['$scope','$ionicBackdrop','$timeout',function ($scope,$ionicBackdrop,$timeout) {
  $scope.action = function () {
    $ionicBackdrop.retain();
    $timeout(function() {
      $ionicBackdrop.release();
    }, 1000);
  };

  $scope.$on('backdrop.hidden', function() {
    console.info('backdrop.hidden');
  });

  // Execute action on backdrop appearing
  $scope.$on('backdrop.shown', function() {
    console.info('backdrop.shown');
  });

}]);

app.controller('EventCtrl',['$scope',function ($scope) {
  $scope.onHold = function () {
    console.info("hold")
  };
  $scope.onTap = function () {
    console.info("top")
  };
  $scope.onDoubleTap = function () {
    console.info('doubleTap');
  };
  $scope.onTouch = function () {
    console.info('onTouch');
  };
  $scope.onRelease = function () {
    console.info('onRelease');
  };
  $scope.onDrag = function () {
    console.info('onDrag');
  };
  $scope.onDragUp = function () {
    console.info('onDragUp');
  };
  $scope.onDragRight = function () {
    console.info('onDragRight');
  };
  $scope.onDragLeft = function () {
    console.info('onDragLeft');
  };
  $scope.onDragDown = function () {
    console.info('onDragDown');
  };
  $scope.onSwipe = function () {
    console.info('onSwipe');
  }
}]);

app.controller('ListCtrl',['$scope','$ionicListDelegate',function ($scope,$ionicListDelegate) {
  $scope.items = [0,1];
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };

  $scope.showDeleteButtons = function(bo) {
    $scope.delButton = bo;
    $ionicListDelegate.showDelete(bo);
  };

  $scope.deleteItem = function (index) {
    $scope.items.splice(index, 1);
  }

}]);
