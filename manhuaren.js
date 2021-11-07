/*
[mitm]
hostname = mangaapi.manhuaren.com

[rewrite]
^http:\/\/mangaapi\.manhuaren\.com\/v1\/user\/getUserInfo.* url script-response-body https://raw.githubusercontent.com/githubacct001/QuantumultX/secret/manhuaren.js

*/


let obj = JSON.parse($response.body);

obj.response.vip["isVip"] = 1;

$done({body: JSON.stringify(obj)});
