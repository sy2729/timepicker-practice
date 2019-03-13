<template>
  <div class="wrap flex justify-space-between">
    <div class="">
      <h2 class="name">{{reminderData.name}}</h2>
      <p class="detail">{{reminderData.detail}}</p>
      <p :class="`role ${reminderData.role && reminderData.role.code ? 'receiver' : 'middleman' }`">{{reminderData.role && reminderData.role.name}}</p>
    </div>

    <div class="flex flex-column align-end justify-space-between">
      <p class="time">{{reminderData.time}}</p>
      <p  class="more"><i class="iconfont icon-more"></i></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['reminderData'],
  
}
</script>

<style lang="scss" scoped>
  $textColorGray: #ABAEB4;
  $borderGray: #C6C6C6;
  $textColor: #3D3C3D;
  $middleman: #83C0DB;
  $receiver: #F3AF93;
  .wrap {
    padding: 10px 5px 10px 15px;
    border-bottom: 1px solid $borderGray; 
    color: $textColor;
    .name {
      margin-bottom: 2px;
    }
    p {
      padding: 2px 0;
    }
    .detail {
      color: $textColorGray;
    }

    .role {
      &.middleman {
        color: $middleman;
      }
      &.receiver {
        color: $receiver;
      }
    }

    .time {
      font-size: .8em;
      color: $textColorGray;
    }
    .more {
      font-size: 1.2em;
    }
  }
</style>

