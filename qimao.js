/*
[mitm]
hostname = *.wtzw.com

[rewrite]
^https:\/\/xiaoshuo\.wtzw\.com\/api\/v(1|2)\/user url script-response-body https://raw.githubusercontent.com/githubacct001/QuantumultX/secret/qimao.js
*/

# 底部横幅广告
^https:\/\/api-ks\.wtzw\.com\/api\/v(1|2)\/(float-adv|init-adv|reader-adv) url reject


let obj = JSON.parse($response.body);

obj.data["is_vip"] = "1";

$done({body: JSON.stringify(obj)});
