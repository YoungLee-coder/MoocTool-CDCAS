// ==UserScript==
// @name         仓辉实训刷课脚本(自动识别验证码)
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  仓辉实训在线自动播放下一集（仅在成都文理学院测试成功，其他学校没试）
// @author       YoungLee
// @match        *://zxshixun.cdcas.com/*
// @grant        none
// @license      MIT
// @require      https://update.greasyfork.org/scripts/502757/1422896/Jquery331.js
// ==/UserScript==

(function () {
    'use strict';

    function playNext() {
        const endFlag = false;
        const elements = document.querySelectorAll('a[target="_self"]');
        let local = 0;

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            if (element.classList.contains("on")) {
                local = i;
                if (i === elements.length - 1) {
                    endFlag = true;
                }
                break;
            }
        }

        if (endFlag) {
            alert("Easy Easy，区区网课也敢班门弄斧！");
        } else {
            setTimeout(() => {
                elements[local + 1].click();
            }, 3000);
        }
    }

    function checkCaptchaAndPlay() {
        const captchaLayer = $('#layui-layer1');

        if (captchaLayer.length && captchaLayer.is(':visible')) {
            console.log("验证码弹窗出现，等待5秒后自动点击开始播放按钮...");

            setTimeout(() => {
                const playButton = $('.layui-layer-btn0');  // 选择 "开始播放" 按钮

                if (playButton.length) {
                    playButton.click();
                    console.log("已自动点击开始播放按钮！");
                } else {
                    console.log("未找到开始播放按钮。");
                    location.reload();  // 刷新当前页面
                }
            }, 5000);
        }
    }

    $(document).ready(function () {
        let videoElement = null;
        let timer = setInterval(() => {
            const verifyTags = document.querySelectorAll('.layui-layer');
            if (verifyTags.length === 1) {
                return;
            }

            if (!videoElement) {
                videoElement = document.querySelector("video");
            }

            if (videoElement && videoElement.paused) {
                videoElement.play();
            }

            if ($('video').length && $('video')[0].readyState === 4) {
                if (videoElement.paused) {
                    console.log("paused");
                    videoElement.play();
                }
                videoElement.onended = function () {
                    playNext();
                    setTimeout(() => {}, 2000);
                };
                videoElement.muted = true;
                videoElement.playbackRate = 1.0;
                videoElement.volume = 0;
            }
        }, 1000);

        // 页面加载后定时检查验证码弹窗
        setInterval(checkCaptchaAndPlay, 2000);
    });
})();
