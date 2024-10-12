// ==UserScript==
// @name         英华学堂刷课脚本(自动识别验证码)
// @namespace    http://tampermonkey.net/
// @version      2.0.3
// @description  学堂在线自动播放下一集（仅在成都文理学院测试成功，其他学校没试）
// @author       YoungLee
// @match        *://mooc.*
// @match        *://mooc.cdcas.com/user/*
// @grant        none
// @license      MIT
// @require https://update.greasyfork.org/scripts/502757/1422896/Jquery331.js
// ==/UserScript==

/**
 * 定义一个立即执行的匿名函数，用于控制视频播放逻辑
 */
(function() {
    'use strict';

    /**
     * 定义播放下一集的函数
     */
    function playNext() {
        const navList = $('.detmain-navlist ').parent();
        const currentChapterIndex = navList.find('.item a').index($('a.on'));
        const chapterLinks = navList.find('.item a');

        if (currentChapterIndex === chapterLinks.length - 1) {
            $('video')[0].onended = function() {
                console.log("Easy Easy，区区网课也敢班门弄斧！");
            };
        } else {
            setTimeout(function() {
                chapterLinks[currentChapterIndex + 1].click();
            }, 5000);
        }
    }

    /**
     * 检查验证码弹窗，并在5秒后自动点击“开始播放”按钮
     */
    function checkCaptchaAndPlay() {
        const captchaLayer = $('#layui-layer1');

        if (captchaLayer.length && captchaLayer.is(':visible')) {
            console.log("验证码弹窗出现，等待5秒后自动点击开始播放按钮...");

            setTimeout(function() {
                const playButton = $('.layui-layer-btn0');  // 选择 "开始播放" 按钮

                if (playButton.length) {
                    playButton.click();
                    console.log("已自动点击开始播放按钮！");
                } else {
                    console.log("未找到开始播放按钮。");
                }
            }, 5000);  // 等待5秒
        }
    }

    // 当文档加载完成后执行
    $(document).ready(function() {
        let videoElement;

        // 定义一个定时器，每秒检查视频元素是否存在且已加载完成
        const timer = setInterval(function() {
            videoElement = $('video');

            if (videoElement.length && videoElement[0].readyState === 4) {
                if (videoElement[0].paused) {
                    console.log("paused");
                    videoElement[0].play();
                }

                videoElement[0].onended = function() {
                    playNext();
                };

                videoElement[0].muted = true;
                videoElement[0].playbackRate = 1.0;
                videoElement[0].currentTime = 0;

                clearInterval(timer);
            }
        }, 1000);

        // 页面加载后定时检查验证码弹窗
        setInterval(checkCaptchaAndPlay, 2000);  // 每2秒检查一次
    });
})();
