<template>
  <div class="app-container">
    <h1 v-color="color">App 根组件</h1>
    <p v-color="'red'">测试</p>
    <button @click="color = 'green'">改变color的颜色值</button>
    <hr />

    <Article>
      <template #title>
        <h3>一首诗</h3>
      </template>

      <template #content="scope">
        <div>
          <p>啊，大海，全是水</p>
          <p>啊，蜈蚣，全是腿</p>
          <p>啊，辣椒，净辣嘴</p>
          <p>{{ scope.msg }}</p>
        </div>
      </template>

      <template #author>
        <div>作者:bin</div>
      </template>
    </Article>
    <hr />

    <div class="box" style="display: none">
      <!-- 渲染 Left 组件和 Right 组件 -->
      <Left>
        <!-- 默认情况下，在使用组件的时候，提供的内容都会被填充到名字为default的插槽中 -->
        <!-- 1.如果需要把内容填到指定名称的插槽中，需要使用v-slot: 这个指令

              2.v-slot: 后面需要跟上插槽的名字

              3.v-slot: 指令不能直接用在元素身上，必须用在 template 标签上

              4.template 这个标签是一个虚拟元素，只起到包裹性质的作用，不会被渲染为任何实质性的 html 元素

              5.**v-slot：的简写为#** -->

        <template v-slot:default>
          <p>这是在Left组件的内容区域，声明的p标签</p>
        </template>
      </Left>
    </div>
  </div>
</template>

<script>
import Left from "@/components/Left.vue";
import Right from "@/components/Right.vue";
import Article from "@/components/Article.vue";
export default {
  components: {
    Left,
    Right,
    Article,
  },
  data() {
    return {
      color: "blue",
    };
  },
  directives: {
    //定义名为color的自定义指令，指向一个配置对象
    // color: {
    //   bind(el, binding) {
    //     console.log("触发了bind函数");
    //     el.style.color = binding.value;
    //   },
    //   update(el, binding) {
    //     console.log("触发了update函数");
    //     el.style.color = binding.value;
    //   },
    // },
    color(el, binding) {
      el.style.color = binding.value;
    },
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
