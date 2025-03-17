# @bean

**实例：** `import org.springframework.context.annotation.Bean;`
<br>
**作用：** 导入Bean注解所在的包

- Bean 注解是Spring框架中用来定义bean的，而bean是由Spring容器管理的对象。
- 举一个例子，比如在一个配置类中使用`@bean`注解来定义一个bean，这样Spring容器就能在运行时创建和管理这个bean的实例。例如，定义一个数据源的bean，或者一个服务的bean，需要说明`@Bean`通常用在`@Configuration`注解的类中，或者用在`@SpringBootApplication`注解的主类中。`@Configuration`通常用于类级别，自动扫描并注册为bean，而`@bean`用于方法级别，返回一个对象实例，由Spring管理。
- 需要注意的是，当使用`@bean`时，方法名默认作为bean的名称，也可以通过name属性指定别名。同时结合其他注解如`@Primary`、`@Qualifier`来管理bean的优先级和注入时的选择。
- `@Bean`的使用场景：比如当需要更精细地控制bean的创建过程时，比如第三方库的类无法用`@Component`注解时，就可以用`@Bean`来手动配置。
- `@Bean`的相关信息:比如Bean的作用域`@Scope`、说明周期回调(`@PostConstruct`、`@PreDestroy`)。

综上所述：

`@Bean`的用途：
- 用于定义Spring容器管理的对象（Bean）
- 通常标注在方法上，方法的返回值会被Spring注册为一个Bean，供依赖注入使用。

Spring容器的核心机制：
- Spring通过控制反转（IoC）管理Bean的生命周期。
- 开发者通过`@Bean`显式声明对象，而不是直接new创建对象。

典型使用场景：

```java
@Configuration  //声明这是一个配置类  
public class AppConfig{  
    @Bean //将该方法的返回值注册为Bean
    public DataSource dataSource(){
        //创建并返回一个数据源对象（例如连接池）
        return new HikariDataSource();
    }

    @Bean(name="myService")     //指定Bean的名称
    public MyService myService(){
        return new MyServiceImpl(dataSource());  //依赖注入已注册的Bean
    }
}
```

两个注解的不同:
1. `@Bean`:  
```java
@Bean 
public A a(){
    return new A();
}
```
2. `@Component`:
```java
@Component
public class B{
    ...
}
```

问：`@Bean`方法会被多次调用吗？  
答：默认单例作用域下，Spring 会缓存方法的返回值，确保多次调用返回同一个实例。

![wang](../assets/images/3.jpg)