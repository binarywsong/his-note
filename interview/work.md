## JavaSE
`JavaSE`是Java平台的标准版，是Java技术的核心与基础。它提供了开发和运行Java应用程序所需的核心API、工具和运行环境，适用于桌面应用、命令行工具、服务器端应用等。`JavaSE`是学习Java编程的起点，也是其他版本（如`JavaEE`、`JavaMe`的基础）。
### JavaSE的核心组成
1. Java语言基础：包括语法、**面向对象编程（类、对象、继承、多态）**、异常处理、泛型等。
2. 核心类库（`Java Class Library`）:
>基础工具：java.lang（如字符串、多线程）、java.util（集合、日期）。<br>输入输出：java.io（文件读写）。<br>
网络编程：java.net（Socket、HTTP请求）。<br>
GUI开发：Java.awt、java.swing（桌面图形界面，现逐渐被其他技术替代）。<br>数据库连接：JDBC（Java Database Connectivity）。
3. Java虚拟机（JVM）：负责执行编译后的Java字节码（.class文件），实现跨平台运行。
4. 开发工具：
>JDK：包含编译器（javac）、调试器、JRE和其他开发工具。<br>
JRE：仅包含运行Java程序所需的JVM和基础类库。
### JavaSE的应用场景
1. 桌面应用程序：如使用Swing或JavaFX开发的图形界面工具。
2. 命令行工具：如构建脚本、数据处理工具（如Maven、Gradle底层依赖JavaSE）。
3. 服务器端应用：基于Socket、HTTP的网络服务（如小型Web服务或中间件）。
### JavaSE的特点
1. 跨平台性：通过JVM实现'一次编写，到处运行'（依赖不同系统的JVM版本）。
2. 自动内存管理：垃圾回收（GC）机制自动回收无用对象，减少内存泄露风险。
3. 丰富的类库：提供大量开箱即用的API，简化开发（如集合操作、多线程、网络通信）。
4. 多线程支持：内置`Thread`类和并发工具（`java.util.concurrent包`），方便编写高并发程序。
### JavaSE vs JavaEE vs JavaMe
>JavaSE：标准版，通用编程基础。<br>
JavaEE（现Jakarta EE）：企业版，扩展了Web和企业级功能（如Servlet、JPA、EJB）。<br>
JavaME：微型版，针对嵌入式设备和移动终端（现已逐渐被Android取代）。
### 反射
<p style="text-indent: 2em">反射即创建一个类的实例，然后获取其元数据（包括类名、包名、字段、方法）。反射在我们日常开发中根本用不上，并非为了改善业务和功能，反射是用代码控制代码，spring、Mybatis等插件都离不开反射，正是有了反射，插件才能取用代码控制代码</p>

<br>
<br>

## Java Web
### cookie
### session

<br>
<br>

## Spring框架
ssm框架

<br>
<br>

## Spring MVC
简单了解一下

<br>
<br>

## mybatis
了解一下怎么使用

<br>
<br>

## SpringBoot

<br>
<br>

## redis

<br>
<br>

## 复习八股文和项目相关
八股文就复习跟Java相关的，主要有集合、以及面向对象概念、多线程基础、jvm基础（垃圾回收、内存运行区域）、mysql+redis

<br>
<br>

## 微服务