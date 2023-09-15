/*
去知乎相关推荐@lbqmy2022

[rewrite_local]
^https?:\/\/www\.zhihu\.com\/api\/v4\/(answers|questions)\/\d+\/related-readings url script-response-body https://raw.githubusercontent.com/githubacct001/QuantumultX/secret/Rewrite/Zhihu/zh_related.js

[mitm]
hostname = www.zhihu.com

*/

let obj = JSON.parse($response.body);

obj = {};
  
$done({body: JSON.stringify(obj)});
