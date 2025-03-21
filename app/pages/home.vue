<script setup lang="ts">
useHead({ title: '' })
definePageMeta({
    alias: ['/'],
    title: '主页',
})
const appConfig = useAppConfig()
</script>

<template>
    <ZhiluAvatar class="avatar" />
    <div class="wrapper">
        <ZField label="<span style='font-size: 3rem;'>👋</span>">
            <h1 style="font-size: 3rem;">
                你好，<br>我是<mark>{{ appConfig.author.name }}</mark>
            </h1>
            <p class="desc">
                {{ appConfig.subtitle }}
            </p>
            <div>
                <ZButton icon="ph:files-duotone" to="https://blog-v3.kemeow.top/" primary>
                    博客
                </ZButton>
                <ZButton icon="ph:github-logo-duotone" to="https://github.com/Kemeow815">
                    GitHub
                </ZButton>
            </div>
        </ZField>

        <ZField label="介绍">
            <p>
                <ZLink to="https://www.niit.edu.cn/">
                    南京工业职业技术大学
                </ZLink>学生，Windows 11 和 Android
                用户。
            </p>
        </ZField>

        <ZField label="近期活动">
            <p>
                2025 年 3 月开始<ZLink to="https://github.comm/Kemeow815/kemiaofx">
                    资源分享
                </ZLink>，同月开始搭建<ZLink to="https://blog.kemiao.online/">
                    个人博客
                </ZLink>，本月还部署了<ZLink to="https://github.com/Kemeow815/HeoMusic">
                    HeoMusic 音乐播放器
                </ZLink>。
            </p>
        </ZField>

        <ZField label="关于主页">
            <p>
                自2025年3月21日开始部署，目前缓慢修缮中。
            </p>
            <p>
                感谢<ZBadge link="https://github.com/KazariEX">
                    KazariEX
                </ZBadge>
                <ZBadge link="https://github.com/isYangs">
                    isYangs
                </ZBadge>等大佬为主页源码提供帮助。<br>
                主页开源在<ZLink to="https://github.com/L33Z22L11/homepage-v5" icon="ph:github-logo-duotone">
                    L33Z22L11/homepage-v5
                </ZLink>上。
                我的项目Fork于它，并在此基础上进行修改<ZLink to="https://github.com/Kemeow815/blog-homepage-v5" icon="ph:github-logo-duotone">
                    Kemeow815/blog-homepage-v5
                </ZLink>。
            </p>
            <p>
                欢迎使用、参考样式：<br>
                <ZBadge
                    img="https://image.m-c.top/?/images/2024/07/21/iyt3mhQCDe/b_a3f6e95501bcc4ce64c19c63a1211bcd.png"
                    link="https://oio.mckfs.com/"
                    text="Oiolosse MC服"
                />
                <ZBadge
                    img="https://bu.dusays.com/2024/07/13/66929d307adb9.png"
                    link="https://henrywhu.cn/"
                    text="Henry Moreau"
                />
                <ZBadge
                    img="https://api-space.tnxg.top/avatar?s=qq"
                    link="https://tnxg.top/"
                    text="天翔TNXG"
                />
                <ZBadge
                    img="https://ykc.im/icon.png"
                    link="https://ykc.im/"
                    text="York Chou"
                />
                <ZBadge
                    img="https://www.xxfer.cn/icon.png"
                    link="https://www.xxfer.cn/"
                    text="小李同学"
                />
                <ZBadge
                    img="https://q1.qlogo.cn/g?b=qq&nk=1043865083&s=2"
                    link="https://www.xlenco.top/"
                    text="Xlenco"
                />
                <ZBadge
                    img="https://www.mugzx.top/icon.png"
                    link="https://www.mugzx.top/"
                    text="Mugzx"
                />
            </p>
        </ZField>
    </div>
</template>

<style lang="scss" scoped>
.avatar {
    position: fixed;
    opacity: 0.2;
    top: 0;
    right: 20vw;
    margin-right: -0.4em;
    font-size: min(100vw, 60vh);
    z-index: -1;
}

.desc {
    margin: 1rem 0;
    font-size: 1.5rem;
    color: var(--c-text-2);
}
</style>
