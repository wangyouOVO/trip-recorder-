// 创建express服务器
const express = require("express");
const app = express();

const joi = require("joi");

// 导入配置文件
const config = require("./config");

// 导入解析token的中间件
const expressJWT = require("express-jwt");

// 配置cors跨域
const cors = require("cors");
app.use(cors());

// 配置解析表单数据的中间件application/x-www-form-urlencoded格式
app.use(express.urlencoded({ extended: false }));

// 优化res.send()代码
// 响应数据的中间件,next交给后面的路由处理
app.use(function (req, res, next) {
  // status = 0 为成功； status = 1 为失败； 默认将 status 的值设置为 1，方便处理失败的情况
  res.cc = function (err, status = 1) {
    res.send({
      // 状态
      status,
      // 状态描述，判断 err 是 错误对象 还是 字符串
      message: err instanceof Error ? err.message : err,
    });
  };
  next();
});

// 配置解析Token的中间件
// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
// 以api开头的接口不需要Token身份认证
app.use(
  expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/api\//] })
);

// 导入并注册新用户路由模块(里面可以调用res.cc了)
const userRouter = require("./router/user");
app.use("/api", userRouter);
// 导入并使用个人中心的路由模块
const userinfoRouter = require("./router/userinfo");
// 注意：以 /my 开头的接口，都是有权限的接口，需要进行 Token 身份认证
app.use("/my", userinfoRouter);

// 定义错误级别的中间件
app.use((err, req, res, next) => {
  // 数据验证失败
  if (err instanceof joi.ValidationError) return res.cc(err);
  // 捕获身份认证失败的错误
  if (err.name === "UnauthorizedError") return res.cc("身份认证失败！");
  // 未知错误
  res.cc(err);
});

app.listen(3007, function () {
  console.log("api server running at http://127.0.0.1:3007");
});
