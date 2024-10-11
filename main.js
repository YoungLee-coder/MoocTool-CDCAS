// ==UserScript==
// @name         英华学堂刷课脚本(自动识别验证码)
// @namespace    http://tampermonkey.net/
// @version      2.0.2
// @description  学堂在线自动播放下一集（仅在成都文理学院测试成功，其他学校没试）
// @author       YoungLee
// @match        *://mooc.*
// @match        *://mooc.cdcas.com/user/*
// @grant        none
// @license    	 MIT
// @require https://update.greasyfork.org/scripts/502757/1422896/Jquery331.js
// @downloadURL https://update.greasyfork.org/scripts/473268/%E8%8B%B1%E5%8D%8E%E5%AD%A6%E5%A0%82%E5%88%B7%E8%AF%BE%E8%84%9A%E6%9C%AC.user.js
// @updateURL https://update.greasyfork.org/scripts/473268/%E8%8B%B1%E5%8D%8E%E5%AD%A6%E5%A0%82%E5%88%B7%E8%AF%BE%E8%84%9A%E6%9C%AC.meta.js
// ==/UserScript==

/**
 * 定义一个立即执行的匿名函数，用于控制视频播放逻辑
 */
(function() {
    'use strict';

    /**
     * 定义播放下一集的函数
     */
    var playNext = function(){
        // 获取当前章节在同级别章节中的索引
        var localElement = $('.detmain-navlist ').parent().find('.item a').index($('a.on'));
        // 获取所有同级别章节的链接
        var sameChaperNameArray = $('.detmain-navlist ').parent().find('.item a');
        // 判断如果当前章节是最后一集，则在视频结束时弹出提示
        if(localElement == (sameChaperNameArray.length-1)){
            $('video')[0].onended = function(){
                 alert("Easy Easy，区区网课也敢班门弄斧！");
            }
        }else{
            // 否则，在视频结束5秒后自动播放下一集
            setTimeout(function(){
                async : $(sameChaperNameArray[localElement+1])[0].click();
            },5000);
        }
    }


    // 检查验证码弹窗，并在5秒后自动点击“开始播放”按钮
var checkCaptchaAndPlay = function() {
    // 检查弹出层是否存在并显示
    var captchaLayer = $('#layui-layer1');
    
    if (captchaLayer.length && captchaLayer.is(':visible')) {
        console.log("验证码弹窗出现，等待5秒后自动点击开始播放按钮...");
        
        setTimeout(function() {
            // 模拟点击“开始播放”按钮
            var playButton = $('.layui-layer-btn0');  // 选择 "开始播放" 按钮
            
            if (playButton.length) {
                playButton.click();
                console.log("已自动点击开始播放按钮！");
            } else {
                console.log("未找到开始播放按钮。");
            }
        }, 5000);  // 等待5秒
    }
};

    // 当文档加载完成后执行
    $(document).ready(function(){
        // 定义一个定时器，每秒检查视频元素是否存在且已加载完成
        var timer = setInterval(function(){
            if($('video').length && $('video')[0].readyState == 4){
                if($('video')[0].readyState == 4){
                    // 如果视频处于暂停状态，将其恢复播放
                    if($('video')[0].paused){
                        console.log("paused");
                        $('video')[0].play();
                    }
                    // 视频播放结束时调用playNext函数播放下一集
                    $('video')[0].onended = function(){
                        playNext();
                    }
                    // 设置视频静音
                    $('video')[0].muted = true;
                    // 设置视频播放速度为1.0
                    $('video')[0].playbackRate = 1.0;
                    // 从视频开始播放
                    $('video')[0].currentTime = 0;
                    // 取消定时器
                    clearInterval(timer);
                }
            }
        },1000);
        // 页面加载后定时检查验证码弹窗
        setInterval(checkCaptchaAndPlay, 2000);  // 每2秒检查一次
    });
})();
