// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: 'UE4',
    link: '/ue4/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    // items: [
    //   // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
    //   {
    //     text: '插件',
    //     items: [
    //       {
    //         text: 'JavaScript',
    //         link: '/pages/8143cc480faf9a11/'
    //       },
    //       // { text: 'Vue', link: '/pages/5d463fbdb172d43b/' },
    //     ],
    //   },
    //   {
    //     text: '学习笔记',
    //     items: [
    //       {
    //         text: '《JavaScript教程》',
    //         link: '/note/javascript/'
    //       },
    //     ],
    //   },
    // ],
  },
  {
    text: 'UE5',
    link: '/ue5/',
  },
  {
    text: 'HarmonyOS',
    link: '/harmonyOS/',
  },
  {
    text: 'LinuxOS',
    link: '/linuxOS/',
  },
  {
    text: 'Linux',
    link: '/linux/',
  },
  {
    text: 'Language',
    link: '/language/',
  },
  // { text: '关于', link: '/about/' },
  {
    text: '收藏',
    link: '/collection/',
  },
  {
    text: '索引',
    link: '/categories/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
