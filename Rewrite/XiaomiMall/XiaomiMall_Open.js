/*
[rewrite] 
^https:\/\/api\.m\.mi\.com\/v1\/app\/start url script-response-body XiaomiMall_Open.js

[mitm] 
hostname = api.m.mi.com
*/

let obj = JSON.parse($response.body);

obj = {
  "code" : 0,
  "data" : {
    "appMode" : {
      "appModes" : [
        {
          "pluginMapInfos" : [
            {
              "srcPid" : "100",
              "dstPid" : "100001"
            },
            {
              "srcPid" : "101",
              "dstPid" : "100002"
            }
          ],
          "modeName" : "mijia"
        }
      ]
    },
    "page_guide" : {
      "img_url" : null,
      "show_skip_btn" : false,
      "skip_btn" : ""
    },
    "api_timeoutms" : 5000,
    "api_version" : 1,
    "tabCfg" : {
      "tab_config" : [
        {
          "icon_big" : false,
          "text_color_normal" : "#747474",
          "show" : true,
          "text_color_selected" : "#ED5B00",
          "icon_normal" : "http://i8.mifile.cn/v1/a1/7a7d0ce7-3859-b188-424d-a0695f5eef0e.png",
          "icon_selected" : "http://i8.mifile.cn/v1/a1/02d4f63a-3bda-210a-5727-110fdf2e3fe1.png",
          "name" : "首页",
          "type" : "home"
        },
        {
          "icon_big" : false,
          "text_color_normal" : "#747474",
          "show" : true,
          "text_color_selected" : "#ED5B00",
          "icon_normal" : "http://i8.mifile.cn/v1/a1/461abe53-55e2-eb46-4817-7909ecd1e2a6.png",
          "icon_selected" : "http://i8.mifile.cn/v1/a1/cc2d5c56-7b00-ec76-02c6-00aed4a08ac9.png",
          "name" : "分类",
          "type" : "category"
        },
        {
          "icon_big" : false,
          "text_color_normal" : "#747474",
          "show" : true,
          "text_color_selected" : "#ED5B00",
          "icon_normal" : "http://i8.mifile.cn/v1/a1/152f3bf2-6218-0414-c0c6-a0adfaf4d410.png",
          "icon_selected" : "http://i8.mifile.cn/v1/a1/4d4dcd34-9b1c-c55c-bdbf-12533decd69f.png",
          "name" : "发现",
          "type" : "discovery"
        },
        {
          "icon_big" : false,
          "text_color_normal" : "#747474",
          "show" : true,
          "text_color_selected" : "#ED5B00",
          "icon_normal" : "http://i8.mifile.cn/v1/a1/9b29cf63-a59a-8b07-36db-5fe0bc309317.png",
          "icon_selected" : "http://i8.mifile.cn/v1/a1/389a48f2-539f-4d28-e9bb-757813dc88a4.png",
          "name" : "购物车",
          "type" : "cart_main"
        },
        {
          "icon_big" : false,
          "text_color_normal" : "#747474",
          "show" : true,
          "text_color_selected" : "#ED5B00",
          "icon_normal" : "http://i8.mifile.cn/v1/a1/835193c2-c643-1d65-e194-17da8e9d0fb9.png",
          "icon_selected" : "http://i8.mifile.cn/v1/a1/6984fc74-6273-aa75-89e0-f35e04d9e8aa.png",
          "name" : "我的",
          "type" : "mine"
        }
      ],
      "tab_bg" : "http://i1.mifile.cn/v1/a1/T1YJZgBmVT1R4cSCrK.png"
    },
    "skip_splash" : false,
    "clear_apis" : [
      "http://api.m.mi.com/v1/home/appInfov2",
      "http://api.m.mi.com/v1/home/tab_page",
      "http://api.m.mi.com/v1/home/appInfo",
      "http://api.m.mi.com/v1/home/recommendChannel",
      "http://api.m.mi.com/v1/product/productView2⁣"
    ],
    "agreement_change" : {

    },
    "Motto" : "",
    "server_time" : 1654358649,
    "preload_plugins" : "249,101,102,109"
  },
  "info" : "ok",
  "desc" : "成功"
}

$done({body: JSON.stringify(obj)});
