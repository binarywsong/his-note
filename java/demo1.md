## JDK下载位置
>www.oracle.com/technetwork/java/javase/downloads/index.html

<br>

## JDEA下载位置
>https://www.jetbrains.com/

<br>

<br>

## Mysql下载位置
>https://dev.mysql.com/downloads/windows/installer/

## 快捷键
1. `psvm + 回车`：快速引入main方法
2. `sout + 回车`：快速打印输出语句 
3. `Ctrl + D`：复制当前光标所在行到下一行（IDEA中）
4. `Ctrl + Y`：删除光标所在行（IDEA中）
5. `/* + 回车`：多行注释
6. `/** + 回车` | `Ctrl + Shift + /`：多行注释
7. 一般要注意两点：（1）字体大小；（2）区分大小写
8. Java中变量不可以重复定义
9. 变量本质上就是一个"可操作的存储空间"。空间位置是确定的，但放置什么值不确定。Java是一种强类型语言，每个变量都必须声明其数据类型。
10. 平展数据包：
![](../assets/images/image51.png)
11. `public static`：方法的修饰符
12. `Ctrl + 鼠标点击方法`：查明方法是在哪编写的
13. `Alt + Insert`：打开构造器
14. `break`：结束当前的循环，可在if语句中使用
15. `Alt + Enter`：自动添加局部变量
16. `Win + E`：调出子电脑

<br>

## 数据类型
Java的数据类型可分为两大类：基本数据类型和引用数据类型。基本数据类型又分为数值型（byte、short、int、long）、字符型（char）、布尔型（boolean）。引用数据类型又分为类（class）、接口（interface）、数组。

<br>

## 流程控制语句
流程控制语句是用来控制程序中各语句执行顺序的语句：顺序、分支、循环。分支结构分为if分支（单分支、双分支、多分支）、switch分支（不常用）。循环结构分为while循环、for循环、do-while循环（不常用）。

<br>

## 形参、实参
形式参数：在方法声明时用于接收外界传入的数据<br>
实际参数：调用方法时实际传给方法的参数

<br>

## 方法的重载
在同一个类中，方法名相同，形参列表不同的多个方法，构成了方法的重载。判断方法是否重载不看方法的修饰符、返回类型。方法重载必须要求方法名相同、形参必须不同（类型不同、顺序不同、个数不同）。

<br>

## 数组
数组是相同类型数据的有序集合，每一个数据称作一个元素，每个元素可以通过一个索引（下标）来访问它们。
```Java
int[] arr = new int[4];
```
遍历数组：
```Java
for(int i = 0; i < 4; i++){
    System.out.println(arr[i]);
}
```
或者：
```Java
for(int num:arr){
    System.out.println(num);
}
```
<br>

数组的缺点：<br>
（1）数组一旦指定了长度，那么长度就确定了，不可以更改；<br>
（2）删除、增加元素效率低，因为当前要插入/删除的位置后面的元素都要依次向前挪动。<br>
（3）**数组中实际元素的数量是没有办法获取的，因为没有提供对应的方法或属性来获取。**<br>
（4）数组存储：有序、可重复，对于某些场景不适用。

<br>

## 类
类名首字母大写，遵循驼峰命名原则。<br>
特性-属性，行为-方法

<br>

## 构造器
对于一个类来说，一般有三种常见的成员：属性（名词）、方法（动词）、构造器。构造方法也叫构造器，是一个类创建对象时被**自动调用**的特殊方法，用于**对象的初始化**。
>Java通过new关键字来调用构造器，从而返回该类的实例
```Java
Person p = new Person();
```
上述：`Person()`是一个空构造方法<br>
new关键字对方法进行调用<br>
构造器作用：底层帮我们创建对象，在创建对象化以后进行初始化操作<br>
如果一个类没有显式编写构造器的话，那么系统会为这个类默认分配一个空构造器。
<br>

构造器的声明方法：没有返回值类型；方法名、构造器名、类名必须一样。

<br>

## 封装
思想：高内聚，低耦合：<br>
高内聚：类的内部数据操作细节自己完成，不允许外部干涉；
低耦合：仅对外暴露少量的方法用于使用。<br>
隐藏对象内部的复杂性，只对外开放简单的接口。

<br>

## 继承
子类 extends 父类<br>
好处：提高代码复用性；便于代码扩展；多态使用的前提。

<br>

## 重写
重写必须有子类跟父类，子类中重写的方法的方法名和形参列表必须和父类中的方法一样。

<br>

## 多态
即同一种行为，不同的子类呈现出来的状态是不同的。多态跟属性无关，多态指的是方法的多态，而不是属性的多态。

<br>

## 异常
对于你预知可能出现错误的代码，放入try中，如果出现了问题，会将异常封装成一个对象，然后用一个值来接收这个对象。如果try中出现异常，则执行catch中的语句，接着执行catch之后的语句；如果发生异常但并没有被捕获到，则catch中的语句不会执行，程序报错，catch后的语句也不会被执行；这时有finally关键字，无论发生异常有没有被捕捉到，均会执行finally中的代码。throw在类中使用人为制造异常，throws在方法声明时使用。

<br>


## 集合
定义一个集合：
```Java
ArrayList list = new ArrayList();
list.add("aaa");    //增加元素
list.add("bbb");
list.add("ccc");
list.add("ddd");
list.remove(0);     //删除元素
list.remove("bbb");
list.set(0, "eee"); //修改元素
list.get(2);
for(int i = 0; i < list.size(); i++){
    System.out.println("list.get(i)");
}
```

<br>

## File类
File类对象可封装要操作的文件，可通过File类的对象对文件进行操作，如查看文件的大小、判断文件是否隐藏、判断文件是否可读等。<br>
但是File类并不涉及文件内容的操作，单靠File类对象无法实现，这时需要借助I/O流完成。
![](../assets/images/image52.png)

<br>

## 线程
如果进程只有一条执行路径的话，那就是单线程；如果进程中有多条执行路径，则是多线程。
>进程是操作系统进行资源分配的基本单位<br>
>线程是操作系统调度执行的基本单位
<br>

创建线程有三种方式：<br>
（1）继承Thread类；<br>
（2）实现Runnable接口；<br>
（3）实现Callable接口。
<br>

&nbsp;&nbsp;线程与任务密不可分，不执行任务的线程是没有意义的。通过类实现接口，在Java中接口都是实现某个功能。类一旦实现Runnable接口，就可以做任务，任务在run()方法里面定义。线程对象由Thread类来创建，任务由Runnable接口定义。

<br>

类实现接口，类创建线程对象，接口实现定义任务，所以线程对象就有了执行任务的能力：
```Java
public class Thread implements Runnable{
    ...
} 
```

<br>

创建线程的实例：
```Java
public class Test{
    public static void main(String[] args){
        Thread thread = new Thread(()->{
            ...
        });
        thread.start();
    }
}
```

<br>

![](../assets/images/image53.png)

<br>
<br>

## 垃圾回收（GC）
垃圾回收器有：G1、ZGC。<br>
垃圾回收算法有：（1）可执行算法：从根节点向下检索扫描。缺点是因为不能时时知晓哪些是垃圾，只有进行扫描之后才知道，因此存在一部分垃圾仍然占据着部分内存 。<br>
（2）引用计数法：采用黑、白、灰三色，黑色代表垃圾、白色代表非垃圾或还未鉴证为垃圾、灰色代表自身已是垃圾，但其子节点等尚未确定。

<br>

垃圾回收作用：负责回收不再使用的对象所占用的内存空间。<br>
垃圾回收通过特定的算法来识别和回收不再使用的对象所占用的内存空间，GC会在后台定期运行，扫描堆内存中的对象，标记那些不再被引用的对象，并释放他们占用的内存。

<br>

执行垃圾回收：
```Java
public class ForceGarbageCollectionExample{
    public static void main(String[] args){
        //创建一些对象，占用内存
        for(int i = 0; i < 1000000; i++){
            new Object();
        }
        //建议JVM执行垃圾回收
        System.gc();
    }
}
```

<br>

当应用程序在运行过程中遇到内存紧张的情况，可以手动触发垃圾回收：
```Java
public class MemoryConstrainedExample{
    public static void main(String[] args){
        try{
            //不断创建对象，模拟内存紧张
            while(true){
                new Object();
            }
        }catch(OutofMemoryError e){
            //捕获内存不足异常
            System.out.println("Out of memory error caught. Trying to garbage collect...");
            //建议JVM执行垃圾回收
            System.gc();
        }
    }
}
```


<br>

## XML
文件首部必须加上：
```XML
<?xml version="1.0" encoding="utf-8" ?>
```
有且只有一个根标签

<br>

>框架 = 注解 + 反射 + 设计模式

<br>

## Mysql
优点：Mysql数据库体积小、速度快、成本低、跨平台、开放源码...
![](../assets/images/image54.png)

<br>

## JDBC
![](../assets/images/image55.png)
>MySQL数据库厂商对JDBC规范的实现就叫做MySQL驱动
<br>

JDBC(Java DataBase Connectivity-Java数据库连接)，是SUN公司定义的一套接口（规范）
<br>

想要使用JDBC，就要在程序中导入驱动包：
![](../assets/images/image56.png)

<br>

## foreach循环
foreach循环是Java 5.0引入的语法糖，目的是简化对集合类和数组的遍历操作。<br>
基本语法：
```Java
for(数据类型 变量名：数组名){
    //执行语句
}
```
示例：
```Java
public class ForEachArrayExample{
    public String void main(String[] args){
        //遍历整型数组
        int[] intArray = {1, 2, 3, 4, 5};
        for(int num:intArray){
            System.out.println(num);
        }
        //遍历字符串数组
        String[] stringArray = {"Java", "Pathon", "C++"};
        for(String str:stringArray){
            System.out.println(str);
        }
    }
}
```

<br>

## 异常
throw:用于在方法内部手动抛出一个异常：
```Java
public static void checkAge(int age){
    if(age > 0){
        throw new IllegalArgumentException("年龄不能为负数");
    }
    System.out.println("年龄合法");
}
```
上述代码中，如果age小于0，就会抛出一个`IllegalArgumentExxcuption`异常。

<br>

throws:用于声明一个方法可能会抛出的异常：
```Java
import java.io.FileInputStream;
import Java.io.IOException;

public class FileReaderExample{
    public static void readFile(String filePath) throws IOException{
        FileInputStream fis = new FileInputStream(filePath);
        //读取文件的代码
        fis.close();
    }
}
```

<br>

## File类
创建一个文件：
```Java
public class FileCreateExample{
    public static void main(String[] args){
        File file = new File("example.txt");
        try{
            if(file.createNewFile()){
                System.out.println("文件创建成功");
            }else{
                System.out.println("文件创建失败");
            }
        }catch(IOException e){
            e.printStackTrace();
        }
    }
}
```

<br>

创建一个目录：
```Java
public class FileCreate{
    public static void main(String[] args){
        File directory = new File("myDirectory");
        if(directory.exists()){
            System.out.println("目录创建成功");
        }else{
            System.out.println("目录创建失败");
        }
    }
}
```

<br>

读取文件内容：
```Java
public class FileReadExample{
    public static void main(String[] args){
        File file = new File("example.txt");
        if(file.exists()){
            System.out.println("文件名称：" + file.getName());
            System.out.println("文件路径：" + file.getPath());
            System.out.println("文件大小：" + file.length() + "，字节");
            System.out.println("文件是否可读写：" + file.canRead() + ", " + file.canWrite());
            System.out.println("文件最后修改时间：" + file.lastModified());
        }else{
            System.out.println("文件不存在");
        }
    }
}
```

<br>

修改文件内容：
```Java
public class FileRenameExample{
    public static void main(String[] args){
        File oldFile = new File("example.txt");
        File newFile = new File("renameExample.txt");
        if(oldFile.renameTo(newFile)){
            System.out.println("文件修改成功");
        }else{
            System.out.println("文件修改失败");
        }
    }
}
```

<br>

删除文件：
```Java
public class FileDeleteExample{
    public static void main(String[] args){
        File file = new File("example.txt");
        if(file.delete()){
            System.out.println("文件删除成功");
        }else{
            System.out.println("文件删除失败");
        }
    }
}
```

删除目录：
```Java
public class FileDelete{
    File directory = new File("myDirectory");
    if(directory.delete()){
        System.out.println("目录删除成功");
    }else{
        System.out.println("目录删除失败");
    }
}
```

<br>

遍历目录：
```Java
public class File1{
    public static void main(String[] args){
        File directory = new File("myDirectory");
        File[] files = directory.listFiles();
        if(files != null){
            for(File file:files){
                if(fils.isDirectory){
                    System.out.println("目录：" + file.getName());
                }else{
                    System.out.println("文件：" + file.getName());
                }
            }
        }
    }
}
```

<br>

判断文件是否为空：
```Java
public class File2{
    public static void main(String[[] args]){
        File file = new File("example.txt");
        if(file.exists){
            System.out.println("文件存在");
        }else{
            System.out.println("文件不存在");
        }
    }
}
```
<br>

在进行文件操作时，始终要进行适当的异常处理，例如，`createNewFile`、`delete`等方法可能会抛出`IOException`，以确保程序的稳定性。<br>
在使用完文件或目录后，确保正确关闭相关资源。虽然File类本身不需要显式关闭，但如果涉及到文件流等资源，一定要在操作完成后关闭，以避免资源泄露。

<br>
<br>

## 重写
Override即重写，是指在子类中重新定义父类中已存在的方法。重写后的方法与父类中的方法拥有相同的方法名、参数列表和返回类型。

<br>

访问修饰符规则：重写方法的修饰符不能比被重写方法的修饰符更严格。例如，如果父类方法是public,子类重写方法可以是public,但不能是protected或private。

<br>
异常抛出规则：重写方法可以抛出与被重写方法相同的异常，或者被重写方法抛出异常的子类，但不能抛出新的、更宽泛的异常。

<br>
Override是实现Java多态性的重要手段，通过重写，不同子类对象可以对同一方法表现出不同的行为。

<br>
Override还可以用于定制子类的行为。例如，在一个游戏角色系统中，不同角色有不同的移动方式。

<br>
遵循里氏替换原则：子类对象应该能够替换掉父类对象，并且程序的行为不会发生改变。在重写方法时，要确保子类方法的行为与父类方法的行为保持一致，或者是对父类方法行为的增强，而不是削弱。例如：<br>

```Java
class Bird{
    public void fly(){
        System.out.println("Bird flies");
    } 
}

class Penguin extends Bird{
    //企鹅不会飞，不应该重写fly方法
    //更好的做法是在Penguin类中添加其他适合企鹅的方法
}
```

<br>
在重写方法时，建议使用`@Override`注解。这个注解可以让编译器检查该方法是否确实重写了父类的方法，如果拼写错误或方法签名不符合要求，编译器会报错，从而提高代码的可靠性。

<br>
<br>

## SpringBoot
>Spring是一个开发框架，提供了IOC（控制反转：将对象的创建和对象之间的依赖关系交给外部完成）和AOP（面向切面编程）。IOC通过依赖注入（DI）机制。AOP允许开发者将横切关注点（日志记录、事务管理）从业务逻辑中分离出来，增强代码的模块化和可复用性。

<br>

>SpringBoot特点：<br>
· 自动配置：根据项目的依赖自动配置sping应用，减少了大量的手动配置工作。例如，添加了`spring-boot-starter-web`依赖后，SpringBoot会自动配置Tomcat服务器和Spring MVC。<br>
· 起步依赖：通过starter依赖，开发者可以快速引入所需的功能集。例如，`spring-boot-starter-data-jpa`用于集成JPA进行数据库访问。<br>
· 嵌入式服务器：支持嵌入式的Tomcat、Jetty等服务器，无需部署到外部容器，方便开发和测试。

<br>

>添加依赖：<br>
· 在项目中的`pom.xml`（Maven）<br>
· 在项目中的`build.gradle`（Gradle）

```Java
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.6.3</version>
</parent>

<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
</dependencies>
```

<br>

>配置服务器端口：<br>
-application.properties:
```Java
server.port=8081
```
>配置服务器端口：<br>
-application.yml:
```Java
server:
    port:8081
```

<br>

>控制器与路由<br>
创建一个控制器类来处理HTTP请求：
```Java
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController{
    @GetMapping("/hello")
    public String hello(){
        return "Hello, Spring Boot";
    }
}
```
`@RestController`表示该类是一个RESTful控制器，`@GetMapping`映射/hello路径到hello方法

<br>

>服务层与数据访问：<br>
1 创建服务接口和实现类：
```Java
//服务接口
public interface UserService{
    String getUserNameById(Long id);
}

//服务实现类
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    @Override
    public String getUserNameById(Long id){
        //实际业务逻辑，例如从数据库查询
        return "User Name for id" + id;
    }
}
```

<br>

>在控制器中使用服务：
```Java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController{
    private UserService 
}
```