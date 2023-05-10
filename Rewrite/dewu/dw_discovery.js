/*
去除得物app探索页面广告@lbqmy2022

[rewrite_local]
^https://app\.dewu\.com/identify-discovery/v1/discovery/index url script-response-body dw_discovery.js

[mitm]
hostname = app.dewu.com

*/

let obj = JSON.parse($response.body);

obj.data.groups = [
      {
        "groupId" : 1,
        "items" : [
          {
            "notice" : null,
            "iconV2" : "",
            "subtitle" : "",
            "featureTags" : [
              ""
            ],
            "abInfo" : "",
            "title" : "消息中心",
            "entryId" : 1,
            "entryType" : 1,
            "needLogin" : 1,
            "icon" : "https://cdn.poizon.com/node-common/8167d5398f216bfea81cc2754d7165e7.png",
            "schemeUrl" : "https://m.poizon.com/router/notice/NewMessageCenterPage"
          }
        ]
      }
   ];
  
$done({body: JSON.stringify(obj)});
