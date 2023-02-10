<template>
  <div>
    <h5>Count组件</h5>
    <p>count的值是:{{ count }}</p>
    <button @click="count += 1">+1</button>

    <button @click="show">打印 this</button>
  </div>
</template>

<script>
export default {
  // props 是自定义属性，允许使用者通过自定义属性，为当前组件指定初始值
  // 自定义属性的名字，是封装者自定义的（只要名称合法即可）
  // props 中的数据，可以直接在模板结构中被使用
  // 注意：props是只读的，不要直接修改props的值，否则终端会报错！
  // props: ["init"],
  props: {
    // 自定义属性A:{/* 配置选项 */}
    // 自定义属性B:{/* 配置选项 */}
    // 自定义属性C:{/* 配置选项 */}
    init: {
      // 如果外界使用count组件的时候，没有传递init属性，则默认值生效
      default: 0,
      // init的值类型必须是 Number 数字
      type: Number,
      // 必填项校验
      required: true,
    },
  },
  data() {
    return {
      count: this.init,
    };
  },
  methods: {
    show() {
      console.log(this);
    },
  },
};
</script>

<style lang="less">
</style>