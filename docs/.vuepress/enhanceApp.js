function integrateGitalk(router) {
  const linkGitalk = document.createElement('link');
  linkGitalk.href = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css';
  linkGitalk.rel = 'stylesheet';
  document.body.appendChild(linkGitalk);
  const scriptGitalk = document.createElement('script');
  scriptGitalk.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js';
  document.body.appendChild(scriptGitalk);

  router.afterEach((to) => {
    if (scriptGitalk.onload) {
      loadGitalk(to);
    } else {
      scriptGitalk.onload = () => {
        loadGitalk(to);
      }
    }
  });

  function loadGitalk(to) {
    let commentsContainer = document.getElementById('gitalk-container');
    if (!commentsContainer) {
      commentsContainer = document.createElement('div');
      commentsContainer.id = 'gitalk-container';
      commentsContainer.classList.add('content');
    }
    const $page = document.querySelector('.page');
    if ($page) {
      $page.appendChild(commentsContainer);
      if (typeof Gitalk !== 'undefined' && Gitalk instanceof Function) {
        renderGitalk(to.fullPath);
      }
    }
  }
  function renderGitalk(fullPath) {
    const gitalk = new Gitalk({
      clientID: '19080448cafef5b4d4c1',
      clientSecret: 'b3c90e36bfdd02a04cfcdb4844fa0ad677c083f6', // come from github development
      repo: 'blog-vuepress',
      owner: 'hu-snail',
      admin: ['hu-snail'],
      id: 'comment',
      distractionFreeMode: false,
      language: 'zh-CN',
    });
    gitalk.render('gitalk-container');
  }
}

export default ({Vue, options, router}) => {
  try {
    document && integrateGitalk(router)
  } catch (e) {
    console.error(e.message)
  }
}

// function integrateGitment(router) {
//     const linkGitment = document.createElement('link')
//     linkGitment.href = 'https://imsun.github.io/gitment/style/default.css'
//     linkGitment.rel = 'stylesheet'
//     const scriptGitment = document.createElement('script')
//     document.body.appendChild(linkGitment)
//     scriptGitment.src = 'https://imsun.github.io/gitment/dist/gitment.browser.js'
//     document.body.appendChild(scriptGitment)
  
//     router.afterEach((to) => {
//       // 已被初始化则根据页面重新渲染 评论区
//       if (scriptGitment.onload) {
//         renderGitment()
//       } else {
//         scriptGitment.onload = () => {
//           const commentsContainer = document.createElement('div')
//           commentsContainer.id = 'gitalk-container'
//           commentsContainer.classList.add('content')
//           const $page = document.querySelector('.page')
//           if ($page) {
//             $page.appendChild(commentsContainer)
//             renderGitment()
//           }
//         }
//       }
//     })
  
//     function renderGitment() {
//       const gitment = new Gitment({
//         // ！！！ID最好不要使用默认值（location.href），因为href会携带hash，可能导致一个页面对应像个评论issue！！！
//         // https://github.com/imsun/gitment/issues/55
//         id: location.pathname,
//         owner: 'hu-snail', // 必须是你自己的github账号
//         repo: 'blog-comment', // 上一个准备的github仓库
//         link: location.origin + location.pathname,
//         admin: ['hu-snail'],
//         oauth: {
//           client_id: '19080448cafef5b4d4c1', // 第一步注册 OAuth application 后获取到的 Client ID
//           client_secret: 'b3c90e36bfdd02a04cfcdb4844fa0ad677c083f6', // 第一步注册 OAuth application 后获取到的 Clien Secret
//         },
//       })
//       gitment.render('comments-container')
//     }
//   }
//   export default ({
//     Vue, // VuePress 正在使用的 Vue 构造函数
//     options, // 附加到根实例的一些选项
//     router, // 当前应用的路由实例
//     siteData // 站点元数据
//   }) => {
//     try {
//       // 生成静态页时在node中执行，没有document对象
//       document && integrateGitment(router)
//     } catch (e) {
//       console.error(e.message)
//     }
//   }