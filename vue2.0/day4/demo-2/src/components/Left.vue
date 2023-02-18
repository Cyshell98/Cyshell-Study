<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <p>msg的值是: {{ msg }}</p>
    <p>user的值是: {{ user }}</p>
    <button @click="msg = 'abc'">修改 msg</button>
    <button @click="user = { address: 'bj' }">修改 user</button>
    <hr />

    <button @click="send">把好诗发给 Right</button>
  </div>
</template>

<script>
//1.导入eventBus.js 模块
import bus from "@/components/eventBus.js";

export default {
  props: ["msg", "user"],
  data() {
    return {
      str: "黑云压城城欲摧，渚清沙白鸟飞回。借问酒家何处是，半江瑟瑟半江红",
    };
  },
  methods: {
    send() {
      // 2.通过eventBus 来发送数据
      bus.$emit("share", this.str);
    },
  },
};
</script>

<style lang="less">
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}
</style>
