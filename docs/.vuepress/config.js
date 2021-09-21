const {path} = require("@vuepress/utils");
const {sidebar} = require("./theme/lib/client/public/js/hrefs");
const {navbar} = require("./theme/lib/client/public/js/navbar");
module.exports = {
    plugins: [
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': {
                        placeholder: 'Search',
                    },
                    '/zh/': {
                        placeholder: '搜索',
                    },
                },
            },
        ]
    ],
    onPrepared: async (app) => {
        const myData = app.pages.map((page) => {
            return page
        })
        await app.writeTemp('my-data.js', `export default ${JSON.stringify(myData)}`)
    },
    //theme: 'ccds',
    theme: path.resolve(__dirname, "theme/lib/node/index.js"),
    //theme: 'vuepress-theme-ccds',
    title: "I do not follow,i lives is always all you want",

    port: 8080,

    themeConfig: {
        logo: "https://ooszy.cco.vin/img/ico/yuan.png",
        navbar: navbar,
        sidebar: sidebar,
        darkMode: false,
        repo: "https://github.com/qsyyke/vuepress-theme-ccds",
        repoLabel: "ccds-theme",
        editLink: true,
        editLinkText: "edit",
        lastUpdated: true,
        lastUpdatedText: "lastTime",
    },
};