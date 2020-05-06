module.exports = {
    vssue() {
        const _env = process.env.NODE_ENV;
        const CONF = {
            production: {
              clientId: '459f926aedb4c0cbdea4',
              clientSecret: '937f6b4842bd5d7dc767b48cd78f7db27bf88d57',
              repo: 'deno-notes',
            },
            development: {
              clientId: '70aebd7352581a821f67',
              clientSecret: 'cab16708c73fdf6bdfdbc73788c8eeaeaaa10793',
              repo: 'deno-notes-dev',
            },
          };
        return {
            // 设置 `platform` 而不是 `api`
            platform: 'github-v4',
            locale: 'zh', // 语言设置
            autoCreateIssue: true,

            // 其他的 Vssue 配置
            owner: 'ReAlign',
            clientId: CONF[_env].clientId,
            clientSecret: CONF[_env].clientSecret,
            repo: CONF[_env].repo,
        }
    }
};