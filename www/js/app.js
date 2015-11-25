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
  })


// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
      .state('tab.home_page', {
        url: '/home_page',
        views: {
          'tab-dash': {
            templateUrl: 'tab-home.html',
            controller: 'home_page'
          }
        }
      })
      .state('tab.process_center', {
        url: '/process_center',
        views: {
          'tab-dash': {
            templateUrl: 'tab-process-center.html',
            controller: 'process_center'
          }
        }
      })
      .state('tab.setting', {
        url: '/setting',
        views: {
          'tab-dash': {
            templateUrl: 'tab-setting.html',
            controller: 'settings'
          }
        }
      })
      .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "tabs.html"
      })
    /* // setup an abstract state for the tabs directive
     .state('tab', {
     url: '/tab',
     abstract: true,
     templateUrl: 'templates/tabs.html'
     })

     // Each tab has its own nav history stack:

     .state('tab.dash', {
     url: '/dash',
     views: {
     'tab-dash': {
     templateUrl: 'templates/tab-dash.html',
     controller: 'DashCtrl'
     }
     }
     })

     .state('tab.chats', {
     url: '/chats',
     views: {
     'tab-chats': {
     templateUrl: 'templates/tab-chats.html',
     controller: 'ChatsCtrl'
     }
     }
     })
     .state('tab.chat-detail', {
     url: '/chats/:chatId',
     views: {
     'tab-chats': {
     templateUrl: 'templates/chat-detail.html',
     controller: 'ChatDetailCtrl'
     }
     }
     })

     .state('tab.account', {
     url: '/account',
     views: {
     'tab-account': {
     templateUrl: 'templates/tab-account.html',
     controller: 'AccountCtrl'
     }
     }
     });

     // if none of the above states are matched, use this as the fallback*/
    $urlRouterProvider.otherwise('/tab/home_page');

  });
