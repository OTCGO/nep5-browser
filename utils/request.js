/**
 * Filename: /Users/wei/Desktop/otcgo/otcgo_browser/utils/request.js
 * Path: /Users/wei/Desktop/otcgo/otcgo_browser
 * Created Date: Sunday, November 26th 2017, 11:19:48 am
 * Author: wei
 * 
 * Copyright (c) 2017 Your Company
 */


function request(params,callback){
    $.ajax(params).then((result)=>{
        callback(null,result.data || result)
      //  return result.data
    }).catch((err) =>{
        callback(err)
        console.error('request',err)
    })
}