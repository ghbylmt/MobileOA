/**
 * Created by MT on 2015/12/30.
 */
var configMod = angular.module("starter.config", []);

configMod.constant("ENV", {
  /**
   * "name":"value"
   * 配置各种接口的地址
   * 接口只写地址不带有后边的参数
   */
  "getNotices": "http://test.hsjq.com/androidServer/noticeshandler.ajax",

})
