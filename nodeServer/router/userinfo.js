// 导入 express
const express = require("express");
// 创建路由对象
const router = express.Router();
// 导入用户信息的处理函数模块
const userinfo_handler = require("../router_handler/userinfo");

// 验证表单数据
// 1.导入验证数据合法性的中间件
const expressJoi = require("@escook/express-joi");
// 2.导入需要的验证规则对象
const { update_userinfo_schema } = require("../schema/user");

// 重置密码
// 导入需要的验证规则对象
const {
  update_password_schema,
} = require("../schema/user");

// 导入验证头像的规则对象
const { update_avatar_schema } = require('../schema/user')

// 获取用户的基本信息
router.get("/userinfo", userinfo_handler.getUserInfo);


// 更新用户的基本信息
router.post("/userinfo", userinfo_handler.updateUserInfo);

// 更新用户的基本信息
router.post(
  "/userinfo",
  expressJoi(update_userinfo_schema),
  userinfo_handler.updateUserInfo
);

// 重置密码的路由
router.post(
  "/updatepwd",
  expressJoi(update_password_schema),
  userinfo_handler.updatePassword
);

// 上传点数据的路由
router.post("/upload",userinfo_handler.uploadMarkers);

// 加载点数据的路由
router.get("/getMarkers",userinfo_handler.sendMarkers)

// 加载单个点数据的路由
router.get("/getMarker",userinfo_handler.sendMarker)

//删除单个点
router.get("/delMarker",userinfo_handler.delMarker)

//修改单个点信息
router.post("/setMarker",userinfo_handler.setMarker)

// 更新用户头像的路由
router.post('/update/avatar', expressJoi(update_avatar_schema), userinfo_handler.updateAvatar)



// 向外共享路由对象
module.exports = router;
