<script setup lang="ts">
import { ZhiluIcon, ZhiluIconOld } from '#components'

useHead({ title: '日志' })
definePageMeta({ headerText: '互联网上的活动记录' })
const timeline = {
    '2025-04-22': '修改一下站点页面',
    '2025-03-21': '个人主页配置修改部分',
    '2025-03-20 18:00:00': '使用纸鹿的主页',
    '2025-05-28': '博客开始使用123云盘图床。',
    // '2024-08-11': '博客：使用 Nuxt Content 重构',
    // '2024-06-01': '个人网站：使用 Nuxt.js 重构',
    // '2024-02-17': '个人网站：使用 VitePress 重写',
    // '2023-05-24': '博客：使用 Hexo 构建纸鹿摸鱼处',
    // '2022-10-12': '个人网站：使用原生前端重写',
    // '2021-09-24': '微信公众号：纸鹿本鹿',
    // '2020-08-10': '个人网站：更换域名 <code>zhilu.cyou</code>',
    // '2019-12-27': 'Slogan：纸鹿至麓不知路，支炉制露不止漉',
    // '2019-07-19': '个人网站：使用 Jekyll，发布第一篇文章',
    // '2019-05-24': '个人网站：购买域名 <code>zhilu.fun</code>',
    // '2019-03-01': h('span', ['Logo：', h(ZhiluIcon)]),
    // '2019-02-06': 'Slogan：纸鹿山行云潜日，日潜云行山路止',
    // '2017-09-08': h('span', ['Logo：', h(ZhiluIconOld), ' PaperyDeer']),
    // '2016-06-28': '开始使用昵称 <code>克喵爱吃卤面</code> 在互联网上活跃',
}
</script>

<template>
    <div class="timeline wrapper">
        <div v-for="(content, date) in timeline" :key="date" class="timeline-item">
            <div class="timeline-item-date">
                {{ date }}
            </div>
            <p v-if="typeof content === 'string'" class="timeline-item-content" v-html="content" />
            <p v-else class="timeline-item-content">
                <component :is="content" />
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.timeline {
    position: relative;
    width: fit-content;
    padding-left: 1em;

    &::before {
        content: "";
        position: absolute;
        top: 0.5em;
        bottom: 0;
        left: 0;
        width: 4px;
        background-color: var(--c-bg-2);
    }
}

.timeline-item {
    display: grid;
    justify-items: start;
    gap: 4px;
    margin: 0.5em 0;

    .timeline-item-date {
        font-size: 0.8em;
        color: var(--c-text-2);
    }

    .timeline-item-content {
        padding: 0.5em 0.8em;
        border-radius: 0.5em;
        background-color: var(--c-bg-2);
    }
}

@container (min-width: $breakpoint-mobile) {
    .timeline-item {
        grid-column-gap: 1em;
        grid-template-areas: "date content";
        grid-template-columns: 1fr 1fr;

        .timeline-item-date {
            grid-area: date;
        }

        .timeline-item-content {
            grid-area: content;
            padding: 0.5em 1em;
        }
    }
}
</style>
