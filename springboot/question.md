# Question

1. 数据库连接失败
```Java
Failed to configure a DataSource
```
检查application.properties中的数据库URL、用户、密码，或排除数据源配置：
```Java
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
```

2. Bean依赖缺失
```Java
No qualifying bean of type 'X' available
```
确保依赖的类已被Spring管理（添加`@Component`、`@Service`等注解）或正确配置Bean方法

3. 端口占用
```Java
Web server failed to start.Port 8080...
```
更换端口：server.port=8081或终止占用端口的进程

4. 配置文件错误
```Java
Could not resolve placeholder 'xxx'
```
检查application.properties中的属性拼写，或确保`@Value`注入的健值存在

5. 依赖冲突/缺失
```Java
ClassNotFoundException/NoClassDefFoundError
```
检查pom.xml或build.gradle，确保依赖项完整且版本兼容

6. 循环依赖
```Java
Requested bean is currently in creation
```
使用构造器注入替代字段注入，或用`@Lazy`延迟加载