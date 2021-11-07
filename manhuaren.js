/*
[mitm]
hostname = mangaapi.manhuaren.com

[rewrite]
^http:\/\/mangaapi\.manhuaren\.com\/v1\/user\/getUserInfo.* url script-response-body https://raw.githubusercontent.com/githubacct001/QuantumultX/secret/manhuaren.js

*/


let obj = JSON.parse($response.body);

obj.response = {
    "copywriting" : "",
    "birthday" : "",
    "nickName" : "漫画人413760361",
    "isInvolvedInVip" : 1,
    "bindGiftCoins" : "完成奖励50赠币",
    "telephone" : "",
    "displayMerge" : 1,
    "sex" : "f",
    "isSign" : 0,
    "needBindPhone" : 0,
    "isAudit" : 0,
    "canBindZoneUser" : 0,
    "job" : "",
    "myVipDescription" : "",
    "timestamps" : 0,
    "welfareName" : "",
    "onRedDot" : 0,
    "personalStatus" : "",
    "vip" : {
      "vipStatus" : 0,
      "vipLevel" : 1,
      "vipTag" : 2,
      "vipExpiredTime" : "23小时后",
      "isVip" : 1
    },
    "headimageUrl" : "",
    "userName" : "漫画人413760361",
    "areaCode" : "",
    "isInvolvedInSign" : 1,
    "payedMangas" : [

    ],
    "userId" : 413760361
  }；

$done({body: JSON.stringify(obj)});
