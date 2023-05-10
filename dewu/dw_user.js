/*
去除得物app用户信息页广告@lbqmy2022

[rewrite_local]
^https://app\.dewu\.com/api/v1/app/index/ice/user-info url script-response-body dw_user.js

[mitm]
hostname = app.dewu.com

*/

let obj = JSON.parse($response.body);


delete obj.data.entranceInfo; // 删除20w借钱
delete obj.data.bountyInfo;  // 删除50w贷款
delete obj.data.promotionResource;  // 删除促销
delete obj.data.financeEntryInfoDTO;  // 删除轮播广告
delete obj.data.proProductEntryDTO; // 删除轮播广告

  
$done({body: JSON.stringify(obj)});
