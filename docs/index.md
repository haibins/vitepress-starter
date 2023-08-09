# Example

## Basic usage

基础用法，最简单的折线图示例

::: sandbox {deps="@xchart/vue: latest" :previewHeight="380" :coderHeight="600" rtl}

```vue /src/App.vue [active]
<template>
    <XChartVue :options="options" :data="data" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { XChartVue, ChartOptions } from '@xchart/vue';
import '@xchart/vue/dist/style.css';

const options = ref<ChartOptions>({
    title: 'Base Line',
    width: 600,
    height: 300,
    legend: true,
    tooltip: true,
    series: [
        {},
        {
            label: 'line',
        },
    ],
});
const data = ref([
    [1566453600, 1566453660, 1566453720, 1566453780, 1566453840],
    [3, 4, 1, -1, 3],
]);
</script>
```

```js /src/main.js
import App from './App.vue';
import { createApp } from 'vue';

createApp(App).mount('#app');
```

:::

## Zoom bar

通过 zoombar 设置可以设置 x、y 轴的缩放轴的开启

### api

api

### example

::: sandbox {deps="@xchart/vue: latest" :previewHeight="380" :coderHeight="600" rtl}

```vue /src/App.vue [active]
<template>
    <XChartVue :options="options" :data="data" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { XChartVue, ChartOptions } from '@xchart/vue';
import '@xchart/vue/dist/style.css';

const options = ref<ChartOptions>({
    title: 'Base Line',
    width: 600,
    height: 300,
    legend: true,
    tooltip: true,
    series: [
        {},
        {
            label: 'line',
        },
    ],
});
const data = ref([
    [1566453600, 1566453660, 1566453720, 1566453780, 1566453840],
    [3, 4, 1, -1, 3],
]);
</script>
```

```js /src/main.js
import App from './App.vue';
import { createApp } from 'vue';

createApp(App).mount('#app');
```

:::

## Multiple axes

多 y 轴设置 示例

### api1

api


### example1

::: sandbox {deps="@xchart/vue: latest" :previewHeight="380" :coderHeight="600" rtl}

```vue /src/App.vue [active]
<template>
    <XChartVue :options="options" :data="data" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { XChartVue, ChartOptions } from '@xchart/vue';
import '@xchart/vue/dist/style.css';

const options = ref<ChartOptions>({
    title: 'Base Line',
    width: 600,
    height: 300,
    legend: true,
    tooltip: true,
    series: [
        {},
        {
            label: 'line',
        },
    ],
});
const data = ref([
    [1566453600, 1566453660, 1566453720, 1566453780, 1566453840],
    [3, 4, 1, -1, 3],
]);
</script>
```

```js /src/main.js
import App from './App.vue';
import { createApp } from 'vue';

createApp(App).mount('#app');
```

:::


