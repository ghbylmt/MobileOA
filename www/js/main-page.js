/**
 * Created by JQLMT on 2015/11/19.
 * 登录后的主页面对JS
 */


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
      .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "tabs.html"
      })
      .state('tab.home_page', {
        url: '/home_page',
        views: {
          'home-tab': {
            templateUrl: 'tab-home.html',
            controller: 'HomePage'
          }
        }
      })
      .state('tab.process_center', {
        url: '/process_center',
        views: {
          'process-center-tab': {
            templateUrl: 'tab-process-center.html',
            controller: 'ProcessCenter'
          }
        }
      })
      .state('tab.setting', {
        url: '/setting',
        views: {
          'setting-tab': {
            templateUrl: 'tab-setting.html',
            controller: 'Setting'
          }
        }
      });

    $urlRouterProvider.otherwise('/tab/home_page');

  });
