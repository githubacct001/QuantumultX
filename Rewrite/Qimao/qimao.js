/*
[mitm]
hostname = xiaoshuo.wtzw.com
[rewrite]
^https:\/\/xiaoshuo\.wtzw\.com\/api\/v(1|2|3)\/user url script-response-body https://raw.githubusercontent.com/githubacct001/QuantumultX/secret/qimao.js
*/

var url = $request.url;
var obj = JSON.parse($response.body);
const v12 = "/api/v(1|2)/user";
const v3 = "/api/v3/user";

if (url.indexOf(v12) != -1) {
    obj.data["is_vip"] = "1";
}
if (url.indexOf(v3) != -1) {
    obj.data["user_area"]["base_info"]["is_vip"] = "1";
}

$done({body: JSON.stringify(obj)});
