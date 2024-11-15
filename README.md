# Mooc-CDCAS
成都文理学院英华在线&仓辉实训刷课脚本<br>
改编自[LayFz/MoocToolS](https://github.com/LayFz/MoocTools),配合自动识别验证码,实现无人刷课<br>

这个项目已经归档,以经摸清楚学校的反作弊机制,请移步[cdcasSK](https://github.com/iFulling/cdcasSK?tab=readme-ov-file)这个项目

> 2024年的10月在CDCAS的第三学期,学校给了一堆网课要求我们去看
>
> 哎没办法,大二学业压力太大了,于是便在网上找个脚本,好在有个学长写过,但是现在加上了恶心的验证码机制!!!
>
> 但是我们秉持着"逢山开路,遇水架桥""的原则,我利用我微薄的知识更新了一下脚本,配合自动识别验证码的脚本,直接速通!!
>
> 尽管在调试脚本的时候我的网课账号被封了7天,哈哈哈哈哈(后面找到了原因),这次写脚本也是挺有收获的,而且是我注册GitHub这么久发布的第一个项目哈哈哈哈哈哈哈
>
> 最后的最后我想说:
>
> "赶月追风莫停留,平芜尽处是春山"<br>

### 使用方法:

#### 在安装本脚本之前,请先安装自动识别验证码的脚本,并完成配置

1.[自动识别填充网页验证码 (greasyfork.org)](https://greasyfork.org/zh-CN/scripts/459260-自动识别填充网页验证码)(推荐安装这个)<br>
2.[万能验证码自动输入（升级版） (greasyfork.org)](https://greasyfork.org/zh-CN/scripts/418942-万能验证码自动输入-升级版)(不推荐,不要安装这个,有概率被封号)

#### 仅推荐使用谷歌(Chrome)、Edge、火狐(FireFox)浏览器
<img src="img\0-1.png" alt="" style="zoom:60%;" />

### 第一步

* 首先安装[油猴脚本](https://www.tampermonkey.net/)
<img src="img\1-1.png" alt="" style="zoom:60%;" />
### 第二步

* 安装刷课脚本

* 选择对应的平台,[英华在线](https://greasyfork.org/zh-CN/scripts/512182-%E8%8B%B1%E5%8D%8E%E5%AD%A6%E5%A0%82%E5%88%B7%E8%AF%BE%E8%84%9A%E6%9C%AC-%E8%87%AA%E5%8A%A8%E8%AF%86%E5%88%AB%E9%AA%8C%E8%AF%81%E7%A0%81)或者[仓辉实训](https://greasyfork.org/zh-CN/scripts/512539-%E6%96%87%E7%90%86%E4%BB%93%E8%BE%89%E5%AE%9E%E8%AE%AD%E5%88%B7%E8%AF%BE%E8%84%9A%E6%9C%AC-%E8%87%AA%E5%8A%A8%E8%AF%86%E5%88%AB%E9%AA%8C%E8%AF%81%E7%A0%81)


<img src="img\2-1.png" alt="" style="zoom:60%;" />
<img src="img\2-2.png" alt="" style="zoom:60%;" />

### <span id="step_3">第三步：</span>

* 在没点进入到视频页面之前不要打开脚本,进入如下图所示页面后再打开脚本
<img src="img\3-1.png" alt="" style="zoom:60%;" />
<img src="img\3-2.png" alt="" style="zoom:60%;" />


* 如果偶尔有失效的情况,重新添加一下自动识别验证码的规则
