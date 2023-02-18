<template>
  <div class="article-container">
    <h3 v-color="'red'">Article组件</h3>
    <!-- 文章的标题 -->
    <div class="header-box">
      <slot name="title"></slot>
    </div>
    <!-- 文章的内容 -->
    <div class="content-box">
      <slot name="content" msg="hello vue" :user="userInfo"></slot>
    </div>
    <hr />

    <!-- 文章的作者 -->
    <div class="foorer-box">
      <slot name="author"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: { name: "zs", age: 18 },
    };
  },
};
</script>

<style lang="less" scoped>
.article-container {
  > div {
    min-height: 150px;
  }
  .header-box {
    background-color: pink;
  }
  .content-box {
    background-color: lightblue;
  }
  .foorer-box {
    background-color: lightsalmon;
  }
}
</style>