/* 
本脚本仅用作学习之用
脚本归属权由 @githubacct001 所有
请于下载此脚本的24内删除本脚本
否则后果自负

[mitm]
hostname = xiaoshuo.wtzw.com

*/

let obj = JSON.parse($response.body)

obj.body.isvip = ｛
  "data" : {
    "is_vip" : "1",
  }
};
  
$done({body: JSON.stringify(obj)});
