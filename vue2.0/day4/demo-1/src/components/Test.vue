<template>
  <div class="test-container">
    <h3 id="myh3">Test.vue 组件---{{ books.length }}本图书</h3>
    <p id="pppp">message的值是:{{ message }}</p>
    <button @click="message += '~'">修改message的值</button>
  </div>
</template>
<script>
export default {
  props: ["info"],
  data() {
    return {
      message: "hello vue.js",
      //定义books数组，存储的是所有图书的列表数据。默认为空数组
      books: [],
    };
  },

  //创建阶段的第一个生命周期函数
  beforeCreate() {
    // console.log(this.info);
    // console.log(this.message);
    // this.show();
  },
  created() {
    //created生命周期函数非常常用
    //经常在它里面，调用methods中的方法，请求服务器的数据
    //并且，把请求到的数据，转存到data中，供template模板渲染的时候使用
    this.initBookList();
  },
  beforeMount() {
    // console.log(this.$el);
    // const dom = document.querySelector("#myh3");
    // console.log(dom);
  },
  //如果要操作当前组建的DOM，最早只能在mounted阶段执行
  mounted() {
    // console.log(this.$el);
    const dom = document.querySelector("#myh3");
    // console.log(dom);
  },

  beforeUpdate() {
    // console.log("beforeUpdate");
    // console.log(this.message);
    // const dom = document.querySelector("#pppp");
    // console.log(dom.innerHTML);
  },
  //   当数据变化之后，为了能够操作到最新的DOM结构，必须把代码写到update生命周期函数中
  updated() {
    // console.log("Updated");

    // console.log(this.message);
    // const dom = document.querySelector("#pppp");
    // console.log(dom.innerHTML);
  },
  beforeDestroy(){
    console.log('beforeDestroy');
  },

  methods: {
    show() {
      console.log("调用了Test组件的show方法");
    },
    initBookList() {
      const xhr = new XMLHttpRequest();
      xhr.addEventListener("load", () => {
        const result = JSON.parse(xhr.responseText);
        // console.log(result);
        this.books = result.data;
      });
      xhr.open("GET", "http://www.liulongbin.top:3006/api/getbooks");
      xhr.send();
    },
  },
};
</script>

<style lang="less" scoped>
.test-container {
  background-color: pink;
  height: 200px;
}
</style>