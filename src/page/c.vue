<template>
  <div class='c'>
    <div class="buttonAll">
      <a class="button" @click="jumpToPage()">
        返回首页
      </a>
      <a class="button" @click="jumpToBPage()">
        返回上一页
      </a>
    </div>
    <div class="bottom_content">
      <p v-for="elem in 100" :key="elem.key">{{elem}}==item_{{$route.params.index}}的详情</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    jumpToBPage () {
      this.$router.push('/bpage')
    },
    jumpToPage () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css" scoped>
.buttonAll{
  position: fixed;
  left:0;
  top:0;
}
.button{
  padding: 10px;
}
.bottom_content {
  margin: 30px;
  overflow-y: scroll;

  -webkit-overflow-scrolling: touch;
}
</style>
