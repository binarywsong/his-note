## 操作系统时区相差过大
报错：`The difference between the request time and the server's time is too large.`<br>
解决方法：检查并同步时间。<br>
```bash
date    //查看系统时间
hwclock //查看硬件时间
```
然后配置自动时间同步：
```bash
yum -y install ntp ntpdate  //安装工具
ntpdate cn.pool.ntp.org //同步到时间服务器：ml-citation{ref="3,5" data="citationList"}
```
启用NTP服务长期同步：
```bash
systemctl enable ntpd --now
```
```bash
hwclock --systohc
hwclock -w
date
```
Linux的时间就与本机的时间一致了。<br>
```bash
touch /data //创建文件
cd /    //回到根目录
ll  //显示所有
rm -rf data //删除文件
chmod -R 755 /data/his/front/goods  //赋予权限
```

