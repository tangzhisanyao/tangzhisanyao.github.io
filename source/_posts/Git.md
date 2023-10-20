---
title: Git
date: 2023-10-20 09:14:52
categories: 其他
tags: Git 
description: 
---

## 安装配置

### 安装

`https://git-scm.com/`

### 配置

```powershell
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```

## 基本使用

1. 创建一个新的 Git 仓库

   ```powershell
   git init
   ```

2. 添加文件到暂存区：

   ```powershell
   git add .
   ```

3. 提交更改：

   ```powershell
   git commit -m "提交信息"
   ```

4. 查看提交历史：

   ```powershell
   git log
   ```

5. 创建分支：

   ```powershell
   git branch 新分支名称
   ```

6. 切换分支：

   ```powershell
   git checkout 需切换分支名称
   ```

7. 合并分支：

   将一个分支合并到当前分支

   ```powershell
   git merge 需合并的分支名称    
   ```

## 远程操作

### 克隆远程仓库到本地

```powershell
git clone 远程仓库地址
```

### 添加远程仓库

`origin`：远程仓库名称，Git默认约定，可选择其他名称

```powershell
git add origin 远程仓库地址
```

### 将本地更改推送到远程仓库

```powershell
git push <选项> <远程仓库名称> <本地分支名称>:<远程分支名称>
```

选项：

* `-u` 或 `--set-upstream`：通常在首次推送分支时使用，将本地分支与远程分支关联

  ```powershell
  git push -u origin my-branch
  ```

  这样，以后可以使用 `git push` 和 `git pull` 不加参数，Git 将自动识别本地分支与哪个远程分支关联

* `-f` 或 `--force`：强制推送，即覆盖远程分支上的更改。谨慎使用这个选项，因为它可能会导致数据丢失

  ```powershell
  git push -f origin my-branch
  ```

* `--all`：一次性推送所有分支到远程仓库

  ```powershell
  git push --all origin
  ```

* `--tags`：推送标签（tags）到远程仓库，用于发布版本

  ```powershell
  git push --tags origin
  ```

* 推送删除分支：如果你要删除远程分支，可以使用 `--delete` 选项。例如，删除名为 `remote-branch` 的远程分支：

  ```powershell
  git push origin --delete remote-branch
  ```

* 推送特定提交：你也可以使用 `git push` 推送特定提交，而不是整个分支。这可以通过提供提交的哈希值来完成

  ```powershell
  git push origin <commit-hash>:<remote-branch>
  ```

  
