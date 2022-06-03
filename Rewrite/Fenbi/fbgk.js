/*

[rewrite] 
^https:\/\/tiku\.fenbi\.com\/iphone\/(shenlun|xingce|sqgj)\/banners\/v2?.* url script-response-body fbgk.js

[mitm] 
hostname = tiku.fenbi.com,

*/

let obj = JSON.parse($response.body);

{
  "banners" : {
    "total" : 0,
    "datas" : [
      {}
    ]
  },
  "bannerStringVO" : {
    "redirectType" : null,
    "content" : "练习",
    "endTime" : 9223372036854775807,
    "url" : null
  }
}

$done({body: JSON.stringify(obj)});
