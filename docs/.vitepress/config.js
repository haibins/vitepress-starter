import { defineConfig } from 'vitepress';
import container from 'markdown-it-container';
import { renderSandbox } from 'vitepress-plugin-sandpack';


export default defineConfig({
    lang: 'zh-CN',
    title: 'XChart',
    description: '高性能轻量级图表库',
    lastUpdated: true,

    markdown: {
        config(md) {
            md.use(container, 'sandbox', {
                // the second parameter is html tag name
                render(tokens, idx) {
                    return renderSandbox(tokens, idx, 'sandbox');
                },
            });
        },
    },
});
