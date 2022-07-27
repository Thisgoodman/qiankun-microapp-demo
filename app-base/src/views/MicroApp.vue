<template>
  <div>
    <h1>micro app子应用</h1>
    <micro-app
      name="microApp"
      :url="url"
      baseroute="/microApp"
      :data="microAppData"
      @created="handleCreate"
      @beforemount="handleBeforeMount"
      @mounted="handleMount"
      @unmount="handleUnmount"
      @error="handleError"
      @datachange="handleDataChange"
    ></micro-app>
  </div>
</template>

<script>
export default {
  name: "vue2",
  data() {
    return {
      url: "http://localhost:3031/",
      microAppData: { msg: "来自基座的数据" },
    };
  },
  methods: {
    handleCreate() {
      console.log("microApp 创建了");
    },

    handleBeforeMount() {
      console.log("microApp 即将被渲染");
    },

    handleMount() {
      console.log("microApp 已经渲染完成");
    },

    handleUnmount() {
      console.log("microApp 卸载了");
    },

    handleError() {
      console.log("microApp 加载出错了");
    },

    handleDataChange(e) {
      console.log("来自子应用 microApp 的数据:", e.detail.data);
    },
  },
};
</script>

<style></style>
