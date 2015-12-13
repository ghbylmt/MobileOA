/**
 * Created by JQLMT on 2015/11/24.
 */
angular.module('starter.controllers', [])
  .controller('HomePage', function ($scope, $http, $state, $timeout, $ionicLoading) {
    //天气信息
    $scope.city_name = '临沂';
    $scope.city_weather_key_word = '晴';
    $scope.city_weather_temp = '9-20℃';
    $scope.city_weather_date = new Date().toLocaleDateString();

    //待办待阅的条数
    $scope.number_unread_email = '0';
    $scope.number_todo_list = '1';
    $scope.number_unsign_document = '21';
    $scope.number_to_read = '2'
    $scope.doRefresh = function () {
      $timeout(function () {
        $scope.$broadcast('scroll.refreshComplete');
      }, 1);
    }
    $scope.todo_list_click = function () {
      console.log('aa', 'aaa');
      alert('aaaa');
    }
    $scope.notic_list_click = function () {
      $state.go('tab.notices_list');
    }
    $scope.address_book_click = function () {
      $state.go('tab.addressbook');
    }
  })

  .controller('Setting', function ($scope) {
    $scope.setting_user_name = '刘茂同';
  })


  .controller('ProcessCenter', function ($scope) {
  })


  .controller('NoticesList', function ($scope, $http, Notices) {
    var pagenum = 1;
    $scope.hasmornotices = true;
    $scope.getMoreNotices = function () {
      Notices.all('liumt', '', pagenum).then(function (noticeslist) {
        pagenum += 1;
        console.log('hasmornotices', $scope.hasmornotices);
        if (noticeslist != null) {
          $scope.notices = noticeslist;
          if (noticeslist.length < (pagenum - 1) * 10) {
            $scope.hasmornotices = false;
          }
        } else {
          //没有加载到任何的通知公告
        }
      });
      $scope.$broadcast('scroll.infiniteScrollComplete');
    };
    $scope.searchNotices = function () {
      console.log('success', $scope.searchText)
    };
    $scope.cancelBtnClick = function () {
      console.log('success', $scope.searchText);
    }
  })
  .controller('NoticeDetials', function ($scope, $stateParams, Notices, NoticeDetial) {
    var noticesdetial = Notices.get($stateParams.noticesCid);
    NoticeDetial.get(noticesdetial.item0).then(function (noticeContent) {
      $scope.noticeContent = noticeContent[0].item0;
      console.log('success', noticeContent);
    });
    $scope.noticedetial = noticesdetial;

  })
  //通讯录的Controller
  .controller('AddressBook', function ($scope) {
    console.log('addressbook', 'enter');
    /*  $scope.hasUserIn = true;//默认有人员
     $scope.hasDepartmentIn = true;//默认有部门
     $scope.departmentName = "华盛江泉集团有限公司";*/
    window.open('http://www.baidu.com', '_system', 'location=yes');
  })
;
