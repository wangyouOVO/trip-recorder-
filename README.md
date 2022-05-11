
# 基于微信小程序和nodejs的行程记录app

 该项目为前端训练营结营大作业，使用微信小程序完成了一个简单的行程记录和规划小程序，并有完整的注册登录系统，每个用户对应的账号可以分别注册多个地点用来规划行程，也可以给去过的地方添加行程日记，每个地点可以对应上传图片并分享给微信好友。对每个地点都有相应的增删查改操作。还有简单的景点买票服务，也可对订单进行修改。
 <br />
 后端使用nodejs搭配mysql实现，可将数据上传至数据库中保存。

<!-- PROJECT SHIELDS -->

<!-- [![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<br />

<p align="center">
<!--   <a href="https://github.com/shaojintian/Best_README_template/">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center"> 您的行程，即刻开始！</h3>
<!--   <p align="center">
    您的行程，即刻开始！
    <br />
    <a href="https://github.com/shaojintian/Best_README_template"><strong>探索本项目的文档 »</strong></a>
    <br />
    <br />
    <a href="https://github.com/shaojintian/Best_README_template">查看Demo</a>
    ·
    <a href="https://github.com/shaojintian/Best_README_template/issues">报告Bug</a>
    ·
    <a href="https://github.com/shaojintian/Best_README_template/issues">提出新特性</a>
  </p> -->

</p>

##演示
<div display="flex">
 <img src="image/1.png" alt="Logo" width="200" height="400">
 <img src="image/2.png" alt="Logo" width="200" height="400">
  <img src="image/3.png" alt="Logo" width="200" height="400">
  <img src="image/4.png" alt="Logo" width="200" height="400">
</div>
## 目录

- [上手指南](#上手指南)
  - [开发前的配置要求](#开发前的配置要求)
  - [安装步骤](#安装步骤)
<!-- - [开发的架构](#开发的架构)
- [部署](#部署)
- [使用到的框架](#使用到的框架) -->
<!-- - [贡献者](#贡献者) -->
<!--   - [如何参与开源项目](#如何参与开源项目) -->
<!-- - [版本控制](#版本控制) -->
<!-- - [作者](#作者)
- [鸣谢](#鸣谢) -->

<!-- ### 上手指南

请将所有链接中的“shaojintian/Best_README_template”改为“your_github_name/your_repository”
 -->


###### 开发前的配置要求

1. 安装MySQL数据库
2. 安装nodejs框架
3. 安装微信开发者工具

###### **安装步骤**

1. Clone the project

```sh
git clone https://github.com/wangyouOVO/trip-recorder-.git
```
2. 配置您的数据库如下两表

 <img src="image/QQ截图20220511213601.png" alt="Logo" width="500" height="400">
  <img src="image/QQ截图20220511213719.png" alt="Logo" width="500" height="400">
  
3.在nodeServer/db/index.js文件中配置您的数据库信息，便可在nodeServer文件下开启终端（用管理员身份打开），输入

```sh
node app.js
```
开启服务器，别忘了在终端中先输入

```sh
net start MySQL80
```
启动数据库，否则会报错

4.使用微信开发者工具导入triprecorder项目，就可以使用了。

<!-- ### 文件目录说明
eg:

```
filetree 
├── ARCHITECTURE.md
├── LICENSE.txt
├── README.md
├── /account/
├── /bbs/
├── /docs/
│  ├── /rules/
│  │  ├── backend.txt
│  │  └── frontend.txt
├── manage.py
├── /oa/
├── /static/
├── /templates/
├── useless.md
└── /util/
```





### 开发的架构 

请阅读[ARCHITECTURE.md](https://github.com/shaojintian/Best_README_template/blob/master/ARCHITECTURE.md) 查阅为该项目的架构。

### 部署

暂无

### 使用到的框架

- [xxxxxxx](https://getbootstrap.com)
- [xxxxxxx](https://jquery.com)
- [xxxxxxx](https://laravel.com)

### 贡献者

请阅读**CONTRIBUTING.md** 查阅为该项目做出贡献的开发者。

#### 如何参与开源项目

贡献使开源社区成为一个学习、激励和创造的绝佳场所。你所作的任何贡献都是**非常感谢**的。


1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



### 版本控制

该项目使用Git进行版本管理。您可以在repository参看当前可用版本。

### 作者

xxx@xxxx

知乎:xxxx  &ensp; qq:xxxxxx    

 *您也可以在贡献者名单中参看所有参与该项目的开发者。*

### 版权说明

该项目签署了MIT 授权许可，详情请参阅 [LICENSE.txt](https://github.com/shaojintian/Best_README_template/blob/master/LICENSE.txt)

### 鸣谢


- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
- [Img Shields](https://shields.io)
- [Choose an Open Source License](https://choosealicense.com)
- [GitHub Pages](https://pages.github.com)
- [Animate.css](https://daneden.github.io/animate.css)
- [xxxxxxxxxxxxxx](https://connoratherton.com/loaders) -->

<!-- links -->
<!-- [your-project-path]:shaojintian/Best_README_template
[contributors-shield]: https://img.shields.io/github/contributors/shaojintian/Best_README_template.svg?style=flat-square
[contributors-url]: https://github.com/shaojintian/Best_README_template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/shaojintian/Best_README_template.svg?style=flat-square
[forks-url]: https://github.com/shaojintian/Best_README_template/network/members
[stars-shield]: https://img.shields.io/github/stars/shaojintian/Best_README_template.svg?style=flat-square
[stars-url]: https://github.com/shaojintian/Best_README_template/stargazers
[issues-shield]: https://img.shields.io/github/issues/shaojintian/Best_README_template.svg?style=flat-square
[issues-url]: https://img.shields.io/github/issues/shaojintian/Best_README_template.svg
[license-shield]: https://img.shields.io/github/license/shaojintian/Best_README_template.svg?style=flat-square
[license-url]: https://github.com/shaojintian/Best_README_template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/shaojintian
 -->
 ### 鸣谢 
 
   <a href="https://github.com/Qpicpicxxz">@陀不妥耶夫斯基 </a>
  
