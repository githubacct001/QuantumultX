/* 
本脚本仅用作学习之用
脚本归属权由 @githubacct001 所有
请于下载此脚本的24内删除本脚本
否则后果自负

[mitm]
hostname = xiaoshuo.wtzw.com

*/

let obj = JSON.parse($response.body);

obj = {
  "data" : {
    "gender" : "2",
    "id" : "140574744",
    "is_vip" : "1",
    "phone" : "",
    "apple_email" : "",
    "wechat_name" : "",
    "is_author" : "0",
    "is_bind_apple" : "1",
    "type" : "user",
    "avatar" : "https:\/\/cdn.wtzw.com\/bookimg\/free\/images\/app\/1_0_0\/portraits_default_photo.png",
    "token" : "eyJhbGciOiJSUzI1NiIsImNyaXQiOlsiaXNzIiwianRpIiwiaWF0IiwiZXhwIl0sImtpZCI6IjE1MzEyMDM3NjkiLCJ0eXAiOiJKV1QifQ.eyJleHAiOjE2MTk0NDE1MzIsImlhdCI6MTYxNjg0OTUzMiwiaXNzIjoiIiwianRpIjoiNDlmNzAwYmUxMDE0YzI4ZGY1NmVhMzJmMWQ5ZDU1NDYiLCJ1c2VyIjp7InVpZCI6MTQwNTc0NzQ0LCJuaWNrbmFtZSI6IuS4g-eMq-S5puWPi18wMzI2NTY1MzQ4MTAiLCJpbWVpIjoiIiwidXVpZCI6IiIsImRldmljZUlkIjoiIiwicmVnVGltZSI6MTYxNjcyNzA5NiwidmlwRXhwaXJlQXQiOjAsInNtX2lkIjoiMjAyMDA5MTMxMjI1MjQyOTBjZDIwOWQ3YjVkYTYyZTE1YzIyNTUwMTlhYThjODAxYjIyZjU3NGNiYjhjZDMiLCJudXQiOjE2MTY3MjcwOTYsImlmdSI6MCwiaXNfcmJmIjowLCJhY3RfaWQiOjAsImJpbmRfYXQiOjB9fQ.jucbut8W3YTIGAKiT-mBuqCq4cT615AphUzgDv47AwxMrULuqeapZYupSSV3-oKbA1PDQmQDeBsc1JirJm8xDp_RYyryJ83l97637U3c0uv23ViEWBxqXX_XaBfn5hP4kj9tPP7OqVR5ld3q_40Xx7_BU5Q8gREVpwCq5Ja0zZI",
    "role" : "0",
    "nickname" : "七猫书友_032656534810",
    "is_sign_in" : "0",
    "comment_forbidden_message" : "",
    "comment_forbidden_type" : "0"
  }
};

$done({body: JSON.stringify(obj)});
