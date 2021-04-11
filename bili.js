let obj = JSON.parse($response.body);

obj.data.vip["vip_due_date"] = "9999999999999";
obj.data.vip["vip_status"] = 1;

$done({body: JSON.stringify(obj)});
