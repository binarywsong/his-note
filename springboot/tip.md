# 每日小Tip
<br>
<br>

![](../assets/images/image37.png)
![](../assets/images/image38.png)
![](../assets/images/image39.png)

<br>
<br>

## 前端允许跨域请求:
```Vue
server:{
    host: "localhost",
    port: 7600,
    cors: true
}
```

<br>
<br>

## 大型网站在负载较大的情况下加载页面也很快是为什么？
这是因为大型的电商网站都会把首页的数据缓存到内存当中，当前端项目渲染首页的时候，后端只需要从内存中提取数据即可，不需要走数据库，所以首页加载速度就明显提升了。

<br>
<br>

## Vue命令行指令：
1. $ `git status`:查看暂存区情况，绿色已上传，红色未上传。