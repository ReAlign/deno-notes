
const DC = require('./data-conf.js');

console.log(DC.vssue());

module.exports = {
    // base: '/readme-blog/',
    title: 'Deno Notes', // Title for the site. This will be displayed in the navbar.
    description: 'deno 学习记录，deno代码分享，deno经验总结，deno开发教程',
    lange: 'zh-CN',
    theme: require.resolve('./theme/'),
    markdown: {
        plugins: [
            // https://github.com/ReAlign/markdown-it-copy
            ['markdown-it-copy', {
                showCodeLanguage: true
            }]
        ]
    },
    themeConfig: {
        // dateFormat: 'YYYY-MM-DD',
        nav: [{
                text: 'Tutorial',
                link: '/posts/',
            },
            {
                text: 'Tags',
                link: '/tag/',
            },
        ],
        directories: [{
                id: 'home',
                dirname: 'posts',
                path: '/',
                layout: 'index-home'
            },
            {
                id: 'post',
                dirname: 'posts',
                path: '/posts/',
                itemPermalink: '/posts/:year/:month/:day/:slug'
            },
        ],
        footer: {
            contact: [{
                type: 'github',
                link: 'https://github.com/ReAlign',
            }],
            copyright: [{
                    text: '© 2019 Realign 版权所有',
                    link: 'https://github.com/ReAlign',
                },
                {
                    text: 'ICP证：浙ICP备19000351号',
                    link: 'http://www.beian.miit.gov.cn'
                },
                {
                    text: '浙公网安备 33010802010600 号',
                    link: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010802010599'
                },
            ]
        },
        // comment: {
        //     service: 'vssue',
        //     owner: 'realign',
        //     repo: 'readme-blog',
        //     clientId: '',
        //     clientSecret: '',
        // },

        // newsletter: {
        //     title: '邮件订阅',
        //     content: '请输入您的邮箱...',
        //     submitText: '订阅',
        //     endpoint: 'https://forapi.us19.list-manage.com/subscribe/post?u=ac82b3046426d14cad8f2a3ef&amp;id=ebfc431c44'
        // },

        sitemap: {
            hostname: 'http://deno-notes.realign.pro',
        },

        feed: {
            canonical_base: 'http://deno-notes.realign.pro',
        },

        smoothScroll: true
    },
    plugins: {
        '@vssue/vuepress-plugin-vssue': DC.vssue(),
    },
}