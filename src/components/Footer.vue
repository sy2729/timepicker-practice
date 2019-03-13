<template>
  <footer class="flex justify-space-around">
    <span 
      v-for="(i, index) in icons"
      :key=index :class="`flex flex-column align-center ${i.sign === currentTab ? 'active' : ''}`"
      @click="$emit('click',i.sign)">
      <i :class="`iconfont ${i.code}`" />
      <span>{{i.text}}</span>
    </span>
  </footer>  
</template>


<script>
export default {
  props: ['currentTab'],
  data() {
    return{
      icons: [
        {
          code: 'icon-shandian',
          text: '工作',
          sign: 'work'
        },
        {
          code: 'icon-renyuan-shi',
          text: '角色',
          sign: 'role'
        },
        {
          code: 'icon-icon-test',
          text: '事项圈',
          sign: 'career'
        },
        {
          code: 'icon-ai-connection',
          text: '同事',
          sign: 'colleage'
        },
        {
          code: 'icon-weibiaoti--',
          text: '日历',
          sign: 'calendar'
        },
      ]
    }
  },
}
</script>


<style lang="scss" scoped>
  $textColorGray: #BCBCBC;
  $colorTheme: #345795;
  footer {
    background: #fff;
    span {
      padding: 10px 0;
      color: $textColorGray;

      span {
        padding: 2px;
      }

      &.active {
        span, i {
          color: $colorTheme;
        }
      }
      i {
        font-size: 1.4em;
      }
    }
  }
</style>
