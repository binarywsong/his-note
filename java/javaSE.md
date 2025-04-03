## continue
作用：跳过当次循环。<br>
模拟：电梯上行到24楼，24楼不停。
```Java
public static void main(String[] args){
    for(int i = 1; i <= 24; i++){
        if(i == 4){
            continue;
        }
        System.out.println(i + "层到了~");
    }
}
```

<br>

## break
作用：结束整个循环<br>
模拟：20岁工作到80岁，60岁退休<br>
注意：只能在循环和switch语句中使用。
```Java
public static void main(String[] args){
    for(int i = 20; i <= 80; i++){
        if(i == 60){
            break;
        }
        System.out.println(i + "岁正在上班");
    }
}
```

<br>

## 数组
格式：数据类型[] 变量名 = new 数据类型[数组长度];<br>
范例：int[] arr = new int[3];