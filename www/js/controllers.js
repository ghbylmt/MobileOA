/**
 * Created by JQLMT on 2015/11/24.
 */
angular.module('starter.controllers', [])
  /**
   * 主页面对的Controller
   */
  .controller('HomePage', function ($scope, $http, $state, $timeout, $ionicLoading, $ionicPopup) {
    //正在加载
    $scope.show = function () {
      $ionicLoading.show({
        template: '<p>正在加载...</p><ion-spinner></ion-spinner>'
      });
    };
    $scope.hide = function () {
      $ionicLoading.hide();
    };
    $scope.show();
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
      }, 1000);//时间的单位为ms
    }
    $scope.todo_list_click = function () {
      $ionicPopup.alert({
        title: '报表中心',
      });
    }
    $scope.notic_list_click = function () {
      $state.go('tab.notices_list');
    }
    $scope.address_book_click = function () {
      $state.go('tab.addressbook', {departmentid: '19006537-c167-4c16-9c19-a2b600e19a79', context: 'addressbook'});
    }
    $scope.outworkingclick = function () {
      //跳转页面之前先判断一下用户的当前状态，如果用户为签出状态则将用户跳转到前会页面
      $state.go('tab.outworkingregister');
    }
    $scope.hide();
  })
  /**
   * 设置页面的Controller
   */
  .controller('Setting', function ($scope) {
    $scope.setting_user_name = '刘茂同';
  })
  /**
   * 流程中心的Controller
   */
  .controller('ProcessCenter', function ($scope, $ionicLoading, $state) {
    // 初始化变量
    $scope.hasTodoList = false;
    $scope.hasReadList = false;
    $scope.hasApplyList = false;
    //正在加载
    $scope.show = function () {
      $ionicLoading.show({
        template: '<p>正在加载...</p><ion-spinner></ion-spinner>'
      });
    };
    $scope.hide = function () {
      $ionicLoading.hide();
    };
    $scope.startProcess = function () {
      $state.go('tab.processstart');
    }
    $scope.toDoListClick = function () {
      $state.go('tab.processtodo');
    }
  })
  /**
   * 发起审批的页面，展示当前用户权限下的所哟可以发起的流程
   */
  .controller('ProcessStart', function ($scope, Processes, $ionicLoading) {
    /**
     * 正在加载的提示
     */
    $scope.show = function () {
      $ionicLoading.show({
        template: '<p>正在加载...</p><ion-spinner></ion-spinner>'
      });
    };
    $scope.hide = function () {
      $ionicLoading.hide();
    };
    $scope.show();
    var classList = [];
    Processes.get('liumt').then(function (response) {
      var j, k = 0;
      classList[k] = [];
      for (var i = 0; i < response.length; i++) {
        // console.log(response[i]);
        if (classList[k].length > 0) {
          if (classList[k][0].item3 != response[i].item3) {
            k += 1;
            classList[k] = [];
          }
        }
        classList[k].push(response[i]);
      }
      $scope.processClasses = classList;
      // console.log($scope.processClasses)
      $scope.hide();
    })
  })
  /**
   * 待办任务的Controller
   */
  .controller('ProcessToDo', function ($scope) {
    /*  wind$cordovaInAppBrowserow.open('http://baidu.com', '_blank', 'location=yes,toolbar=yes,closebuttoncaption=关闭');*/
    /* var options = {
     location: 'no',
     clearcache: 'yes',
     toolbar: 'no'
     };
     $cordovaInAppBrowser.open('http://www.baidu.com', '_blank', options);*/
    $scope.tabIndex = "待办任务";
    $scope.isOne = true;
    $scope.showTab = function (tabIndex) {
      console.log("tabIndex:" + tabIndex);
      if (tabIndex == "待办任务") {
        $scope.isOne = true;
        $scope.isTwo = false;
      } else {
        $scope.isOne = false;
        $scope.isTwo = true;
      }
      $scope.tabIndex = tabIndex;
    };
  })
  /**
   * 通知公告的Controller
   */
  .controller('NoticesList', function ($scope, $http, Notices, $ionicLoading, $ionicPopup, $timeout) {
    /**
     * 正在加载的提示
     */
    $scope.show = function () {
      $ionicLoading.show({
        template: '<p>正在加载...</p><ion-spinner></ion-spinner>'
      });
    };
    $scope.hide = function () {
      $ionicLoading.hide();
    };
    $scope.show();
    var pagenum = 1;
    Notices.all('liumt', '', pagenum).then(function (noticeslist) {
      pagenum += 1;
      $scope.notices = noticeslist;
      $scope.hide();
    });
    // $scope.$broadcast('scroll.infiniteScrollComplete');
    $scope.loadMoreClick = function () {
      $scope.show();
      Notices.all('liumt', '', pagenum).then(function (noticeslist) {
        if (noticeslist != null) {
          $scope.notices = $scope.notices.concat(noticeslist);
          pagenum += 1;
          console.log('aaaa', $scope.notices);
          if (noticeslist.length < 10) {

          }
        } else {
          var myPopup = $ionicPopup.show({
            title: ' 已加载完成！',
            scope: $scope,
            buttons: []
          });
          myPopup.then(function (res) {
          });
          $timeout(function () {
            myPopup.close(); //close the popup after 3 seconds for some reason
          }, 1000);
        }
        $scope.hide();
      });
    }
    $scope.searchNotices = function () {
      console.log('success', $scope.searchText)
    };
    $scope.cancelBtnClick = function () {
      console.log('success', $scope.searchText);
    }
  })
  .
  controller('NoticeDetials', function ($scope, $stateParams, Notices, NoticeDetial, $ionicLoading) {
    /**
     * 正在加载的提示
     */
    $scope.show = function () {
      $ionicLoading.show({
        template: '<p>正在加载...</p><ion-spinner></ion-spinner>'
      });
    };
    $scope.hide = function () {
      $ionicLoading.hide();
    };
    $scope.show();
    var noticesdetial = Notices.get($stateParams.noticesCid);
    NoticeDetial.get(noticesdetial.item0).then(function (noticeContent) {
      $scope.noticeContent = noticeContent[0].item0;
      $scope.hide();
      console.log('success', noticeContent);
    });
    $scope.noticedetial = noticesdetial;

  })
  /**
   * 通讯录的Controller，用于获取部门和部门下的人员
   * 2015年12月19日10:40:55
   * by LMT
   */
  .controller('AddressBook', function ($scope, $stateParams, $http, DepartmentList, UserList, $ionicLoading) {
    /**
     * 正在加载的提示
     */
    $scope.show = function () {
      $ionicLoading.show({
        template: '<p>正在加载...</p><ion-spinner></ion-spinner>'
      });
    };
    $scope.hide = function () {
      $ionicLoading.hide();
    };
    $scope.show();//正在加载展示出来
    $scope.hasUserIn = true;//默认有人员
    $scope.hasDepartmentIn = true;//默认有部门
    $scope.departmentName = "华盛江泉集团有限公司";
    var departmentid = $stateParams.departmentid;
    var listItems = [];
    var type = 'department';
    if (departmentid == '19006537-c167-4c16-9c19-a2b600e19a79') {
      type = 'initial'
    }
    $scope.listDepartment = new Array();
    DepartmentList.get(departmentid, type).then(function (response) {
      if (response == null) {
        $scope.hasDepartmentIn = false;
      }
      $scope.listDepartment = response;
      $scope.hide();
    });
    UserList.get(departmentid).then(function (response) {
      $scope.listUserList = response;
      if (response == null) {
        $scope.hasUserIn = false;
      } else
        $scope.departmentName = response[0].item2;
      $scope.hide();
    });
    // window.open('http://www.baidu.com', '_self', 'location=no');
  })
  /**
   * 通讯录中的人员详情展示页面，用于展示页面中的人员的详情
   */
  .controller('ProfilePage', function ($scope, $http, $stateParams, UserInfo, $ionicLoading) {
    $scope.show = function () {
      $ionicLoading.show({
        template: '<p>正在加载...</p><ion-spinner></ion-spinner>'
      });
    };
    $scope.hide = function () {
      $ionicLoading.hide();
    };
    var usercid = $stateParams.usercid;
    $scope.show();
    UserInfo.get(usercid).then(
      function (response) {
        var userInfo = response[0];
        $scope.hide();
        $scope.userName = userInfo.item1;
        $scope.userPhone = userInfo.item2;
        $scope.jobName = userInfo.item5;
        $scope.employeeId = userInfo.item4;
        $scope.emailAddress = userInfo.item3;
        $scope.departmentName = userInfo.item6;
        $scope.userCode = userInfo.item7;
      });
  })
  /**
   * 外出登记页面的Controller
   */
  .controller('OutWorkingRegister', function ($scope, $http, $ionicPopup, $state) {
    $scope.userName = '刘茂同';
    $scope.outDate = new Date().toLocaleString();
    $scope.btnOutClick = function (outer) {
      //必填验证
      if (outer == null || outer.address == null || outer.address == '' || outer.reason == null || outer.reason == '') {
        $ionicPopup.alert({
          title: '外出地点和外出事由均为必填项 &nbsp;&nbsp;请认真填写！',
          buttons: [{text: '确定', type: 'button-assertive'}]
        });
      } else {
        //必填在验证通过，开始发送外出等级的请求
        var url = 'http://test.hsjq.com/AndroidServer/OutRegister/OutWorkingHandler.ashx?ajaxMethod=outregister&usercode=liumt&outdate=' + $scope.outDate + '&outreason=' + outer.reason + '&outaddress=' + outer.address;
        $http.get(url).then(function (response) {
          console.log('outreg', response.data.errorCode);
          if (response.data.errorCode == '0001') {
            $ionicPopup.alert({
              title: '签出成功！',
              buttons: [{
                text: '确定', type: 'button-positive', onTap: function () {
                  $state.go('tab.home_page');
                }
              }]
            });
          }
        }, function () {
          $ionicPopup.alert({
            title: '签出失败请重新尝试！',
            buttons: [{
              text: '确定', type: 'button-assertive'
            }]
          });
        });
      }
    }
  });
