/*
[mitm]
hostname = pan.baidu.com

[rewrite]
^https:\/\/pan\.baidu\.com\/api\/usercfg\?app_id=250528(\S){656} url script-response-body https://raw.githubusercontent.com/githubacct001/QuantumultX/secret/Rewrite/BaiduYun/BaiduYun_FrontPage.js
*/


let obj = JSON.parse($response.body);

obj = {
  "errno" : 0,
  "user_new_define_cards" : [
    {""}
  ],
  "request_id" : 99064433033946318,
  "errmsg" : "success"
};
  
$done({body: JSON.stringify(obj)});
