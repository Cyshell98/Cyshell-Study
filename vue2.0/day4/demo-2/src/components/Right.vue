<template>
  <div class="right-container">
    <h3>Right 组件 --- {{ count }}</h3>
    <button @click="add">+1</button>
    <h3>{{ msgFromLeft }}</h3>
  </div>
</template>

<script>
//1.导入eventBus.js 模块
import bus from "@/components/eventBus.js";

export default {
  data() {
    return {
      // 自组建自己的数据，将来希望把count值传给父组件
      count: 0,
      msgFromLeft: "",
    };
  },
  created() {
    //2.为bus绑定自定义事件
    bus.$on("share", (val) => {
      this.msgFromLeft = val;
    });
  },
  methods: {
    add() {
      //让子组件的 count 值自增+1
      this.count += 1;
      //把自增的结果，传给父组件
      //修改数据时，通过$emit()触发自定义事件
      this.$emit("numchange", this.count);
    },
  },
};
</script>

<style lang="less">
.right-container {
  padding: 0 20px 20px;
  background-color: lightskyblue;
  min-height: 250px;
  flex: 1;
}
</style>
