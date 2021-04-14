/*
[mitm]
hostname = xiaoshuo.wtzw.com

[rewrite]
^https:\/\/xiaoshuo\.wtzw\.com\/api\/v(1|2)\/user url script-response-body https://raw.githubusercontent.com/githubacct001/QuantumultX/secret/qimao.js
*/

let obj = JSON.parse($response.body);

obj.data["is_vip"] = "1";

$done({body: JSON.stringify(obj)});
