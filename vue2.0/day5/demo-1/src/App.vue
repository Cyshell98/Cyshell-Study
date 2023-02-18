<template>
  <div class="app-container">
    <h1 ref="myh1">App 根组件</h1>
    <button @click="showThis">打印this</button>
    <button @click="onReset">重置Left组件的count为0</button>
    <hr />

    <input v-if="inputVisible" type="text" @blur="showButton" ref="iptRef" />
    <button v-else @click="showInput">展示输入框</button>

    <hr />
    <Left ref="comLeft"></Left>
    <div class="box">
      <!-- 渲染 Left 组件和 Right 组件 -->
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";

export default {
  data() {
    return {
      //控制输入框和按钮的按需切换
      // 默认值为false，表示显示按钮，隐藏输入框
      inputVisible: false,
    };
  },
  methods: {
    showThis() {
      console.log(this);
    },
    onReset() {
      // this.$refs.comLeft.count = 0;
      this.$refs.comLeft.resetCount();
    },
    // 点击按钮，展示输入框
    showInput() {
      //1.切换布尔值，把输入框展示出来
      this.inputVisible = true;
      //2.给输入框获取焦点
      this.$nextTick(() => {
        this.$refs.iptRef.focus();
      });
    },
    // 输入框失去焦点，展示按钮
    showButton() {
      this.inputVisible = false;
    },
  },
  components: {
    Left,
    Right,
  },
};
</script>

<style lang="less">
.app-container {
  padding: 1px 20px 20px;
  background-color: #efefef;
}
.box {
  display: flex;
}
</style>
