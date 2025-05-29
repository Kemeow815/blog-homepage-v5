// 存储 nuxt.config 和 app.config 共用的配置

import type { NitroConfig } from 'nitropack'

const author = {
    name: '克喵爱吃卤面',
    avatar: 'https://cn.cravatar.com/avatar/1F6C8947D35A8186A1647009BA8BC5F2?size=256',
    email: 'me@kemiaosw.top',
    homepage: 'https://www.kemiao.online/',
}

const homepageConfig = {
    title: '克喵爱吃卤面 (@Kemeow815)',
    subtitle: '每一段旅行都有终点~',
    description: '这是克喵爱吃卤面的主页，致力于分享资源和生活，欢迎访问~',
    author,
    language: 'zh-CN',
    timezone: 'Asia/Shanghai',
    favicon: 'https://cn.cravatar.com/avatar/1F6C8947D35A8186A1647009BA8BC5F2?size=256',
    url: 'https://www.kemiao.online/',
    blogAtom: 'https://blog-v3.kemeow.top/atom.xml',
}

// https://nitro.build/config#routerules
export const routeRules = <NitroConfig['routeRules']>{
    '/api/avatar.png': { redirect: author.avatar },
    '/api/icon.png': { redirect: homepageConfig.favicon },
}

export default homepageConfig
