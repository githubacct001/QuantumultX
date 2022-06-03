/*
[mitm]
hostname = pan.baidu.com

[rewrite]
^https:\/\/pan\.baidu\.com\/api\/usercfg\?app_id=250528(\S){656} url script-response-body https://raw.githubusercontent.com/githubacct001/QuantumultX/secret/Rewrite/BaiduYun/BaiduYun_User.js
*/

let obj = JSON.parse($response.body);

obj = {
  "errno" : 0,
  "show_msg" : "",
  "data" : [
   ｛｝
  ],
  "newno" : "",
  "request_id" : 1370388586704711239
};
  
$done({body: JSON.stringify(obj)});
