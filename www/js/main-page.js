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

  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('bottom');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
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
      })
      .state('tab.notices_list', {
        url: '/notices_list',
        views: {
          'home-tab': {
            templateUrl: 'notice-list.html',
            controller: 'NoticesList'
          }
        }
      })
      .state('tab.notice_detial', {
        url: '/notices_list/:noticesCid',
        views: {
          'home-tab': {
            templateUrl: 'notice-detial.html',
            controller: 'NoticeDetials'
          }
        }
      })
      .state('tab.addressbook', {
        url: '/addressbook/:departmentid',
        views: {
          'home-tab': {
            templateUrl: 'address-book.html',
            controller: 'AddressBook'
          }
        }
      })
      .state('tab.profilepage', {
        url: '/profilepage/:usercid',
        views: {
          'home-tab': {
            templateUrl: 'profile-page.html',
            controller: 'ProfilePage'
          }
        }
      })
      .state('tab.outworkingregister', {
        url: '/outworkingregister',
        views: {
          'home-tab': {
            templateUrl: 'outworkingregister.html',
            controller: 'OutWorkingRegister'
          }
        }
      })
      .state('tab.processstart', {
        url: '/processstart',
        views: {
          'process-center-tab': {
            templateUrl: 'process-start.html',
            controller: 'ProcessStart'
          }
        }
      })
      .state('tab.processtodo', {
        url: '/processtodo',
        views: {
          'process-center-tab': {
            templateUrl: 'process-todo.html',
            controller: 'ProcessToDo'
          }
        }
      })
    ;

    $urlRouterProvider.otherwise('/tab/home_page');

  });
