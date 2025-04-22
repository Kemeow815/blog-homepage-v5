// 存储 nuxt.config 和 app.config 共用的配置

import type { NitroConfig } from 'nitropack'

const author = {
    name: '克喵爱吃卤面',
    avatar: 'https://s2.loli.net/2025/04/21/OMNycVpidhQt92r.png',
    email: 'kemiaofx@163.com',
    homepage: 'https://www.kemiao.online/',
}

const homepageConfig = {
    title: '克喵爱吃卤面 (@Kemeow815)',
    subtitle: '每一段旅行都有终点~',
    description: '这是克喵爱吃卤面的主页，致力于分享资源和生活，欢迎访问~',
    author,
    language: 'zh-CN',
    timezone: 'Asia/Shanghai',
    favicon: 'https://cdn.jsdelivr.net/gh/kmfx/tuchuang@main/img/website2.png',
    url: 'https://blog.kemiao.online/',
    blogAtom: 'https://blog-v3.kemeow.top/atom.xml',
}

// https://nitro.build/config#routerules
export const routeRules = <NitroConfig['routeRules']>{
    '/api/avatar.png': { redirect: author.avatar },
    '/api/icon.png': { redirect: homepageConfig.favicon },
}

export default homepageConfig
