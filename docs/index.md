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

### api


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

## Resize

Resize 适应容器 示例

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

## Log axis

对数轴的基础用法

### example

下面例子以对数 2 为底作为 Y 轴

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
    scales: {
        x: {
            time: true,
        },
        y: {
            distr: 3,
            log: 2, //对数基数 2 10
        },
    },
    axes: [{}, {}],
    series: [
        {},
        {
            label: 'line',
        },
    ],
    zoom: {
        enable: true,
        // resetOffset: 0,
        enableZoomBackBySelect: true,
        enableDbClickReset: true,
    },
});
const data = ref([
    [1566453600, 1566453660, 1566453720, 1566453780, 1566453840],
    [10, 100, 1000, 10000],
]);
</script>
```

```js /src/main.js
import App from './App.vue';
import { createApp } from 'vue';

createApp(App).mount('#app');
```

:::
