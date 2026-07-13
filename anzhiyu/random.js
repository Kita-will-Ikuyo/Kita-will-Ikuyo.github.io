var posts=["2026/07/13/hello-world/","2026/07/13/RL学习笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };