// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('login', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('signin', {
        url: '/sign-in',
        templateUrl: 'templates/sign-in.html',
        controller: 'SignInCtrl'
      })
      .state('forgotpassword', {
        url: '/forgot-password',
        templateUrl: 'templates/forgot-password.html'
      })
      // setup an abstract state for the tabs directive
      .state('mianpage', {
        url: '/main-page',
        templateUrl: 'templates/main-page.html'
      })
    $urlRouterProvider.otherwise('/sign-in');
  })

  .controller('SignInCtrl', function ($scope, $state) {
    $scope.signIn = function (user) {
      //实现登陆的功能
      if (user == null || user.username == null || user.password == null) {
        document.getElementById("loginerror").style.display = "block";
      }
      console.log('Sign-In', user);
      window.location.href = 'templates/main-page.html';
    };
    $scope.change = function () {
      document.getElementById("loginerror").style.display = "none";
    };
  });
