<script setup lang="ts">
import type { CardProps } from '~/components/partial/Card.vue'

useHead({ title: '站点' })
definePageMeta({ headerText: '一些网站' })

const toolSites: Array<CardProps> = [
    {
        name: '克喵的音乐页',
        nameAlt: 'Music',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://music.kemiao.online' },
            { icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/Kemeow815/HeoMusic' },
        ],
        desc: '基于 Heo Music修改的音乐播放器。',
    },
    {
        name: '克喵的memos说说',
        nameAlt: 'Memos说说',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://memos.kemiaosw.top' },
            { icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/Kemeow815/memos-stellar' },
        ],
        desc: '基于memos的说说页面。',
    },
    {
        name: '克喵的TG说说',
        nameAlt: 'TGshuoshuo',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://shuoshuo.kemiao.online' },
            { icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/Kemeow815/BroadcastChannel' },
        ],
        desc: '基于Telegram的动态说说。',
    },
    {
        name: '克喵的每日热榜',
        nameAlt: 'DailyHot',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://dailyhot.kemeow.cn/#/' },
            { icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/Kemeow815/DailyHot-kemiao' },
        ],
        desc: '基于梦爱吃鱼的每日热榜的修改页面。',
    },
    {
        name: '网站监测',
        nameAlt: 'status',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'montor.kemiaofx.cn' },
            { icon: 'ph:github-logo-duotone', text: 'GitHub', to: 'https://github.com/Kemeow815/Uptime-Status-kemiao' },
        ],
        desc: '基于梦爱吃鱼的网站监测',
    },
]

// const orgSites: Array<CardProps> = [
//     {
//         name: '西邮&thinsp;Linux&thinsp;兴趣小组',
//         nameAlt: 'Xiyou Linux Group',
//         buttons: [
//             { icon: 'ph:planet-duotone', text: '访问', to: 'https://xiyoulinux.com' },
//         ],
//         desc: '西安邮电大学计算机学院2006年9月建立的一个兴趣小组。本人于2022年10月22日成为其中一员，于2024年3月16日使用 VitePress 重建官网。',
//     },
//     {
//         name: '野生技协',
//         nameAlt: 'TECHYES',
//         buttons: [
//             { icon: 'ph:planet-duotone', text: '访问', to: 'https://thisis.host' },
//         ],
//         desc: '宝鸡中学校内的一个自发性的技术协助组织、无门槛的技术交流群，旨在信息分享、交流与公开，于2020年7月20日对外开放，多个 <ZLink to="https://thisis.host/site">二级域名</ZLink>为校友提供项目部署服务。官网于2021年8月8日建立，并于2024年2月3日升级为博客。',
//     },
//     {
//         name: '邮立方',
//         nameAlt: 'Cube of Posts',
//         buttons: [
//             { icon: 'ph:planet-duotone', text: '访问', to: 'https://cop.cooo.site' },
//         ],
//         desc: '西安邮电大学校内的 Minecraft 兴趣交流团体，<ZLink to="https://www.mualliance.cn/">Minecraft 高校联盟(MUA)</ZLink>成员，于2023年10月6日对外开放。官网于2024年1月1日建立，并于2024年2月10日升级为博客。',
//     },
//     {
//         name: '方块茶话会',
//         nameAlt: 'Block Tea Reception',
//         buttons: [
//             { icon: 'ph:planet-duotone', text: '访问', to: 'https://btr.thisis.host/' },
//         ],
//         desc: '宝鸡中学校内的 Minecraft 爱好群体，由 <ZLink icon="ph:github-logo-duotone" to="https://github.com/guuguai/">古古怪怪GuuGuai </ZLink> 于2020年7月17日建立。帮助文档网站于2022年6月12日建立，并于2024年2月21日迁移。',
//     },
//     {
//         name: '相侵相碍异家人',
//         nameAlt: 'Alien Family Hub',
//         buttons: [
//             { icon: 'ph:planet-duotone', text: '访问', to: 'https://alienfamily.us.kg/' },
//         ],
//         desc: 'Hexo博客交流群“糖果屋”的群友组织的Minecraft服务器，于2024年7月18日建群。2025年2月2日创建了成员列表页面。',
//     },
// ]
//
</script>

<template>
    <ZTitle>克喵的站点</ZTitle>
    <ZCardList :data-list="toolSites" />
    <!-- // <ZTitle>组织门户</ZTitle>
    // <ZCardList :data-list="orgSites" /> -->
</template>

<style lang="scss" scoped>
</style>
