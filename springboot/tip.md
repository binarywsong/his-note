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

<br>
<br>

## Java标准库
Java标准库是一组预定义的类和接口，为Java程序提供了广泛的功能。这些库位于`java.`和`javax.`包以及一些其他位置，是Java编程语言的核心部分。<br>
**核心Java类库:**
- `java.lang`包:包含所有Java程序都需要的类，如`String`、`Math`、`System`等。这个包由解释程序自动加载，不需要显式说明（不需要用`import`）。
- `java.util`包：包含集合框架（如`List`、`Set`、`Map`），日期和时间API（如`Calendar`、`Date`、`TimeZone`）,随机数生成器（`Random`）等
- `java.io`包：包含用于文件和流操作的类，如`File`、`FileInputStream`、`BufferedReader`、`BufferedWriter`,这些类提供了对不同输入和输出设备读写数据的支持。
- `java.nio`包：提供非阻塞I/O类库，用于提高I/O操作的性能和可扩展性。
- `java.net`包：包含用于网络编程的类，如`URL`、`Socket`、`Serversocket`、`InetAddress`等。
- `java.sql`包：提供与数据库交互的接口，如`Connection`、`Statement`、`ResultSet`等。<br>
其他常用包：
- `java.awt`、`javax.swing`:用于创建图形用户界面（GUI）的类库。
- `java.security`:包含用于加密、访问控制、证书、密钥生成和管理的类。
- `java.util.concurrent`:包含用于并发编程的类，如`Thread`、`Runnable`、`ExecutorService`、`ConutDownLatch`等。

<br>
<br>

## Java API文档
是一个详细的在线资源，其中包含了关于Java标准库中每个类和接口的详细信息，包括其方法和属性描述、示例代码和常见问题解答，可以通过`Oracle`官方网站来访问这些文档。

<br>
<br>

## Java类
### @1
 `RoutimeException`:是Java标准库中的一个类，继承自`Exception`,是所有运行时异常的基类。<br>

未检查异常：与`IOException`等已检查异常不同，`RoutimeException`不需要在方法签名中声明，也不强制要求使用`try-catch`块进行捕获。<br>
典型错误类型:`RoutimeException`通常用于描述程序逻辑上的错误，编译器无法检查这些错误，通常是程序员的疏忽或输入不当导致的。

<br>
<br>

## 全局处理异常
`SpringBoot`提供了全局处理异常的技术，只要我们给某个Java类用上`@RestControllerAdvice`注解，这个类就能捕获SpringBoot项目中所有的异常，然后统一处理，即把异常的详情信息输出到后端的日志里面，然后将精简的异常信息返回给前端项目。

<br>
<br>

## 异步线程
SpringBoot会把某些任务对象推给线程池去执行。之所以叫异步线程，是因为线程池中的线程相当于主线程来说就是异步的：主线程把任务推给线程池，线程池挑选某个空闲线程去执行这个任务，主线程并不会等待线程池的执行结果，主线程会继续往下做别的事情。

<br>
<br>

## 注解
1. `@EnableAsync`:主类加上此注解后，SpringBoot就开启了异步线程的功能。这样某些任务就可以推送给线程池去执行。
<br>

2. `@Async`:向线程池推送任务去执行。<br>
定义了一个Java类，名字叫什么无所谓：
```Java
public class CheckupWorkAsync{

    //声明一个方法,推给线程池去执行
    //注解括号里的是线程池执行者的名字
    @Async("AsyncTaskExecutor")
    public void createReport(Integer id){
        
    }
}
```
<br>

3. `@Data`：生成get、set方法。
<br>

4. `@NotBlank`:验证变量的值是否为空值或者空字符串。
```Java
@NotBlank(message = "username不能为空")
private String username; 
```
<br>

5. `@RestController`:接口方法返回对象，转换为json文本。在接口类里面使用，因为如果把当前的接口返回给对应的客户端，肯定需要把后端的数据转化为json文本，对应的客户端才能够更好的进行处理。

<br>

6. `@RequestMapping("/user")`:加一级类级别的映射,到时候客户端去访问当前的接口的时候，即`localhost:8088/user/**`来访问后面的接口。

<br>
<br>

7. `@Repository`:将当前类注册为spring的bean；来表示数据访问层的bean。<br>
`@Service`:将当前类注册为spring的bean；来表示业务逻辑类的bean。<br>
`@Component`:将当前类注册为spring的bean。<br>
这样分开来做职责更加明确。

## 构建
1. 在Java文件夹下的`com.example.his.api`包下创建`mis`包，在`mis`包下新建一个包叫`service`,在`service`包下新建一个接口叫`UserService`,在接口里面声明抽象方法。接下来去到实现类里面把抽象方法实现一下，在package`service`底下新建一个包叫`Impl`，在这个包里面新建一个Java类叫`UserServiceImpl`。并且再`mis`包下边新建一个包叫`controller`,如果写Web方法就放在`controller`的实现类里面。
![](../assets/images/image40.png)

<br>
<br>

## 引用变量
在Java中，引用变量是指向对象的变量，它们存储的是对象在内存中的地址，而不是对象本身的值。引用变量的主要特点是通过它们可以访问对象，并且可以通过赋值操作将一个引用变量的值赋给另一个引用变量。引用变量包含了对对象的引用，假如定义一个类`Circle`，这个类是一种引用类型，该类类型的变量可以引用该类的一个实例：
```Java
Circle circle = new Circle(9);  //参数表示半径
```
这个例子中，变量`circle`的值保存的是一个引用，它指明这个`Circle`对象的内容存储在内存的什么位置。
<br>

**基本类型变量和引用类型变量的区别：**<br>
每个变量都代表一个保存了存储值的内存位置，声明一个变量时，就是在告诉编辑器这个变量可以存放什么类型的值。<br>
基本类型变量：在内存中存储的是一个基本类型值，可以在栈中直接分配内存，例如`int a = 1;`中变量a的值就是int值1。<br>
引用类型变量： 对应内存所存储的值是一个引用，是对象的存储地址，对象的引用在栈中，对象实际存放在堆中。

<br>
<br>

## 名词
1. `Dao`：通常指的是数据访问对象（Data Access Object）。

<br>
<br>

## 接口
接口是一种定义方法签名的类型，类可以实现接口来提供具体的方法实现。在Java、ts中，接口是一种约定规范，用于定义类或对象的行为，但不包含具体实现。<br>
核心作用：<br>
1. 解耦：分离“做什么”（接口定义）和“怎么做”（具体实现）。
2. 多态：允许不同类通过同一接口提供不同实现。
3. 标准化：强制实现类遵守统一的方法签名。
```Java
//定义接口
interface Animal{
    void eat(); //抽象方法（无具体实现）
    void sleep();
}

//类实现接口
class Dog implements Animal{
    public void eat(){
        System.out.println("狗吃骨头");
    }
    public void sleep(){
        System.out.println("狗趴着睡");
    }
}
```

<br>
<br>

## SpringBoot
`SpringBoot`是一个脚手架，用于快速搭建一个基于`Spring`的`Web`应用，创建即可开发业务代码。其设计目的是用来简化`Spring`应用的初始搭建以及开发过程。
<br>

**优点：**<br>
（1）快速构建一个独立的`Spring`应用程序；<br>
（2）嵌入了`Tomcat`、`Jetty`，无需部署`WAR`包，只需要将`SpringBoo`t打成一个`Jar`包，直接通过`Java`跟`Jar`就可以直接启动`Web`应用；<br>
（3）提供了各种各样的`starter`，比如说要继承`springvc`，就有`springvc`对应的`starter`；如果要集成`redis`，就用`redis`对应的`starter`，这样就可以简化Maven配置，并且还帮助管理版本号，减少版本不一致带来的版本冲突的问题；<br>
（4）对`Spring`和第三方库提供默认配置，也称为自动配置类，采用约定大于配置的方式，只要添加了对应的`starter`依赖，就会包含对应的自动配置，从而做到开箱即用。<br>
（5）无需配置XML。
<br>

比如对一个用户系统的用户模块，后端通过三层的结构:<br>
第一层是控制层，通过springmvc来实现，：`@RestController`、`@Controller`。<br>
业务层写一些业务逻辑代码,:`@Service`。<br>
数据访问层去提供数据库操作的功能，通过SpringData JPA来实现，是Spring生态自带的，可以无缝的进行集成。
<br>

![](../assets/images/image41.png)
![](../assets/images/image42.png)
![](../assets/images/image43.png)
<br>

想要一个实体类映射为数据库中的一个表，因为springdata jpa是面向对象的方式操作数据库，所以可以加上一个`@Table`，再加上一个`@Entity`,这样就相当于把这个类映射成了一个表。`@Table`默认会将类名当作表名，所以需要在注解中声明一下：<br>
![](../assets/images/image44.png)<br>
报错说要添加主键id，解决方法：加上@Id注解，将user_id作为主键id。id是以什么样的方式生成，如果希望它是自动生成的方式，加上`@GeneratedValue`,并指定其策略，比如说**自增**的方式：
![](../assets/images/image45.png)<br>
通过可以把字段名用`@Column`改一下，默认情况下会把属性名作为数据库表的字段名，所以可以映射一下：<br>
![](../assets/images/image46.png)<br>
如果想项目运行的时候自动生成数据库的表，就需要在`application.properties`配置文件中加上
```Java
spring.jpa.hibernate.ddl-auto=update
```
此外它到时候会生成数据库的SQL语句，希望让他打印在控制台上，可是如果不格式化一下，即`format_sql`一下，它会打印在一行上，不方便我们阅读：
```Java
spring.jpa.properties.hibernate.format_sql=true
```
此外：显示sql：
```Java
spring.jpa.show-sql=true
```
利用这种springdata jpa面向对象的数据库持久化方式可以增加开发效率。
![](../assets/images/image47.png)

<br>
<br>

## 问题
### @1
错误：Java：错误：不支持发行版本19
解答：通常是由于项目配置的Java版本与本地安装的JDK版本不一致导致的。

<br>
<br>

## Rest
其实就是客户端根据不同的请求方法：`GET`、`POST`、`PUT`、`DELETE`。当我们发起任何一个请求，比如打开任意一个网页，到我们服务端都会带一个请求头，这个请求头就会有它当前的请求方法。`GET`表查询，用`@GetMapping`。`POST`表新增，用`@PostMapping`来进行映射。`PUT`表修改，用`@PutMapping`。`DELETE`表删除，用`@DeleteMapping`。<br>
例如增加：
```Java
@PostMapping
public String add(){

}
```
这里`add()`需要接受一个客户端传过来的`user`信息,当然还可以直接把这个`User`类用于参数接收，即：
```Java
@PostMapping
public String add(User user){

}
```
但对于规范有要求的项目，一般都会用`DTO`的类即数据传输类来去接收这些客户端请求过来的参数。因为客户端请求过来的参数不一定就是pojo类所包含的这几个参数：
![](../assets/images/image48.png)
我的这个pojo类只有四个参数，用User类来接收完全可以。对于有规范要求的项目，可以在`pojo`里面再加一个`dto`的包，创建一个`UserDto`类。然后将`User`类里面的声明变量复制一份到`UserDto`中，于是将`UserDto`作为前端参数的一个接收。<br>
最好加上一个`@RequestBody`,传进`UserDto`来的是一个json文本，会帮我们转换成对象：
```Java
@PostMapping
public String add(@RequestBody UserDto user){

}
```
通常一个业务逻辑类会创建一个接口，这样面向接口进行编程，对于以后的扩展性、维护性会更强。学了设计模式就会明白接口对于扩展性的好处。<br>
在业务逻辑类中标记成spring的bean之后，就可以在接口包中用`@Autowired`自动装配进来，用userService来进行接收。
```Java
@Autowired
IUserService userService;
```
在业务逻辑层调用数据访问的方法，则在数据库访问层`repository`新建一个类。如果我们使用的是springdata jpa，因为对应的增删查改的方法不需要我们自己去实现，我们只需要去继承一个`CrudRepository`，这个接口会自动帮我们实现好。<br>
```Java
public interface UserRepository extends CrudRepository{

}
```
这时可以去指定两个类型：第一个类型是要操作哪个`pojo`类：`pojo`包的`User`pojo类,第二个类型是你当前这个`User`类的主键Id是什么数据类型：`Integer`：
```Java
@Repository //当前类注册为spring的Bean
public interface UserRepository extends CrudRepository(User, Integer){

}
```


