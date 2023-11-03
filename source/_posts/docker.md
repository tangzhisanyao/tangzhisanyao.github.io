---
title: Docker
date: 2023-10-19 22:57:51
type: Docker
---

## 

`$PWD`：是一个环境变量，表示当前工作目录的路径

```powershell
PS D:\docker> pwd

Path
----
D:\docker

docker docker -v $PWD/ql/data:/ql/data
docker -v D:/docker/ql/data:/ql/data
```

