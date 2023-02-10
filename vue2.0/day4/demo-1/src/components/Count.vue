<template>
  <div>
    <h5>Count组件</h5>
    <p>count的值是:{{ init }}</p>
    <button @click="init += 1">+1</button>
  </div>
</template>

<script>
export default {
  // props 是自定义属性，允许使用者通过自定义属性，为当前组件指定初始值
  // 自定义属性的名字，是封装者自定义的（只要名称合法即可）
  // props 中的数据，可以直接在模板结构中被使用
  props: ["init"],
  data() {
    return {
      count: 0,
    };
  },
  method: {},
};
</script>

<style lang="less">
</style>