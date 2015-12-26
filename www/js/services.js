/**
 * Created by JQLMT on 2015/11/24.
 * 后台获取数据的方法
 */
angular.module('starter.services', [])
  /**
   * 更具人员的CID获取人员所能够阅读的通知公告的列表
   */
  .factory('Notices', function ($http) {
    var notices = [];
    return {
      all: function (usercode, search, pagenum) {
        var url = "http://test.hsjq.com/AndroidServer/Notice/NoitceHandler.ashx?ajaxMethod=getnotices&usercode=" + usercode + "&pagenum=" + pagenum + "&search=" + encodeURI(encodeURI(search));
        console.log('aaa', url)
        return $http.get(url).then(function (response) {
          var noticesTemp = response.data.messageContent;
          if (pagenum == '1')
            notices = noticesTemp;
          else {
            if (noticesTemp != null) {
              notices = notices.concat(noticesTemp);
            }
          }
          return noticesTemp;
        });
      },
      get: function (noticesCid) {
        for (var i = 0; i < notices.length; i++) {
          if (notices[i].item0 == noticesCid) {
            return notices[i];
          }
        }
        return null;
      }
    }
  })
  /**
   * 根据通知公告的CID获取通知公告的详情
   */
  .factory("NoticeDetial", function ($http) {
    var noticeDetial = '';
    return {
      get: function (noticeCid) {
        return $http.get("http://test.hsjq.com/AndroidServer/Notice/NoitceHandler.ashx?ajaxMethod=getnoticedetial&cid=" + noticeCid).then(
          function (response) {
            noticeDetial = response.data.messageContent;
            return noticeDetial;
          }
        );
      }
    }
  })
  /**
   * 根据部门的CID获取部门下的所有的子部门
   */
  .factory("DepartmentList", function ($http) {
    var list = [];
    return {
      get: function (dptCid, type) {
        var url = "http://test.hsjq.com/AndroidServer/AddressBook/AddressBookHandler.ashx?ajaxMethod=getDepartment&type=" + type + "&cid=" + dptCid;
        return $http.get(url).then(
          function (response) {
            list = response.data.messageContent;
            return list;
          });
      }
    }
  })
  /**
   * 根据部门的CID获取部门下的所有的人员
   */
  .factory("UserList", function ($http) {
    var list = [];
    return {
      get: function (dptCid) {
        var url = "http://test.hsjq.com/AndroidServer/AddressBook/AddressBookHandler.ashx?ajaxMethod=getUsers&cid=" + dptCid;
        return $http.get(url).then(
          function (response) {
            list = response.data.messageContent;
            return list;
          });
      }
    }
  })
  /**
   * 根据用户的CID获取用户的详细信息
   */
  .factory("UserInfo", function ($http) {
    var list = [];
    return {
      get: function (usercid) {
        var url = "http://test.hsjq.com/AndroidServer/AddressBook/AddressBookHandler.ashx?ajaxMethod=getUserInfo&type=person&cid=" + usercid;
        return $http.get(url).then(
          function (response) {
            list = response.data.messageContent;
            return list;
          }
        )
      }
    }
  })
  .factory('Processes', function ($http) {
    var list = [];
    return {
      get: function (usercode) {
        var url = "http://test.hsjq.com/AndroidServer/ProcessCenter/ProcessStartHandler.ashx?usercode=" + usercode + "&ajaxMehtod=getprocesslist";
        return $http.get(url).then(
          function (response) {
            list = response.data.messageContent;
            return list;
          }
        )
      }
    }
  });

