/**
 * Created by JQLMT on 2015/11/24.
 * 后台获取数据的方法
 */
angular.module('starter.services', [])
  .factory('Notices', function ($http) {
    var notices = '';
    return {
      all: function (usercode, search, pagenum) {
        var url = "http://192.168.90.47:8080/Notice/NoitceHandler.ashx?ajaxMethod=getnotices&usercode=" + usercode + "&pagenum=" + pagenum + "&search=" + encodeURI(encodeURI(search));
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
          return notices;
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
  .factory("NoticeDetial", function ($http) {
    var noticeDetial = '';
    return {
      get: function (noticeCid) {
        return $http.get("http://192.168.90.47:8080/Notice/NoitceHandler.ashx?ajaxMethod=getnoticedetial&cid=" + noticeCid).then(
          function (response) {
            noticeDetial = response.data.messageContent;
            return noticeDetial;
          }
        );
      }
    }
  });

