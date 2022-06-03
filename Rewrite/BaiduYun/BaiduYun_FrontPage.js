let obj = JSON.parse($response.body);

obj = {
  "errno" : 0,
  "user_new_define_cards" : [
    {}
  ],
  "request_id" : 99064433033946318,
  "errmsg" : "success"
};
  
$done({body: JSON.stringify(obj)});
