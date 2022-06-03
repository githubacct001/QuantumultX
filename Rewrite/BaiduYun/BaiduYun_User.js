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
