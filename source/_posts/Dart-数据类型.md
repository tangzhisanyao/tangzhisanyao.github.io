---
title: Dart-数据类型
date: 2023-10-23 14:55:07
categories: Dart
tags: Flutter、Dart
description:
---

## 数字型

### 整数

`int`：用于表示整数，例如 int age = 25;

#### 内置函数

1. `abs()`：返回整数的绝对值。

   ```dart
   int number = -5;
   number = number.abs();  // number = 5
   ```

2. `toDouble`()：将整数转换为双精度浮点数（`String`）

   ```dart
   int num = 42;
   double numValue = num.toDouble();  // numValue = 42.0
   ```

3. `toString()`：将整数转换为字符串（`String`）

   ```dart
   int num = 20;
   String str = num.toString();  // str = "20"
   ```

4. `parse()`：将字符串解析为整数

   ```dart
   String str = "99";
   int num = int.parse(str);  // num = 99
   ```

5. `isEven`：检查整数是否为偶数

6. `isOdd`：检查整数是否为奇数

7. `bitLength`：返回整数的位长度

8. `hashCode`：返回整数的哈希码值

### 浮点数

## 字符串

1. `lenth`：返回字符串的长度
2. `isEmpty`：检查字符串是否为空
3. `toUpperCase()`：将字符串的所有字符转换为大写字母
4. `toLowerCase()`：将字符串的所有字符转换为小写字母
5. `trim()`：去除字符串开头和结尾的空白字符
6. `split()`：将字符串分割为子字符串，使用指定的分割符
7. `substring()`：获取字符串的子字符串，指定开始和结束位置
8. `startsWith()` 和 `endsWith()`：检查字符串是否以指定的前缀或后缀开始或结束
9. `indexOf()` 和 `lastIndexOf()`：查找指定子字符串在字符串中第一个和最后一个出现位置
10. `containes()`：检查字符串是否包含指定子字符串
