var posts=["2023/10/19/docker/","2023/10/19/flutter/","2023/10/19/hello-world/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};