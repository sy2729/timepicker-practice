<template>
  <div class="wrapper">
    <div class="cal-header flex align-center">
      <span class="flex-1"></span>
      <span class="current-date flex-2" v-text=displayedDate></span>
      <span class="select-today flex-1 t-right pointer" @click="selectToday">今天</span>
    </div>

    <div class="date-header" ref="dateBoard">
      <div class="weekDay-header flex justify-space-between">
        <span v-for="(i, index) in allWeekDays" :key="index" class="flex align-center justify-center">{{i}}</span>
      </div>

      <div v-if="!foldState" class="main-block large-board flex flex-wrap">
        <span
          :class="`each-day flex align-center justify-center pointer
                   ${i.content === now.day && currentMonth === now.month && currentYear === now.year ? 'currentDay' : ''}
                   ${i.content === selectedInfo.day && currentMonth === selectedInfo.month && currentYear === selectedInfo.year ? 'selectedDay' : ''}`"
          v-for="(i, index) in dayList"
          :key="index"
          @click="selectDay(i.content)">{{i.content}}
        </span>
      </div>
      <div v-else class="main-block small-board flex">
        <span
          :class="`each-day flex align-center justify-center pointer
                   ${i.content === now.day && currentMonth === now.month && currentYear === now.year? 'currentDay' : ''}
                   ${i.content === selectedInfo.day && currentMonth === selectedInfo.month && currentYear === selectedInfo.year? 'selectedDay' : ''}`"
          v-for="(i, index) in subList"
          :key="index"
          @click="selectDay(i.content)">{{i.content}}
        </span>
      </div>
      <div class="fold-btn relative flex justify-center">
          <div :class="`arrow pointer ${foldState ? '': 'up'}`" @click="toggleBoard">
            <span></span><span></span>
          </div>
      </div>
      <div class="date-options flex justify-space-around">
        <span 
        v-for="(i, index) in tabOptions"
        :key=index
        :class="`date-each-option pointer ${i.sign === currentTab ? 'active': ''}`"
        @click="currentTab = i.sign">{{i.text}}</span>
      </div>
    </div>

    <div class="content">
      <Reminder
        v-for="(i, index) in reminder" :key=index
        :reminder-data="i" />
    </div>
  </div>
</template>


<script>
import { getWeekDay, daysInMonth, addZeroForNum, formateDateToStamp } from '../utils/dateOperation'
import { Swipe } from '../utils/swiperDetector';
import Reminder from './Reminder';
export default {
  name: 'Calendar',
  data() {
    return {
      allWeekDays: ['日','一','二','三','四','五','六'],
      foldState: true,
      dayList:  [],
      currentDay: null,
      currentYear: null,
      currentMonth: null,
      subList: null,
      subListInfo: {
        subListIndex: null,
        startPosition: null,
      },
      selectedInfo: {
        day: null,
        month: null,
        year: null,
      },
      now: {
        year: null,
        month: null,
        day: null
      },
      tabOptions: [
        {
          text: '已设置提醒',
          sign: 'reminder'
        },
        {
          text: '创建时间',
          sign: 'createdTime'
        },
        {
          text: '最后发言时间',
          sign: 'lastWord'
        },
      ],
      currentTab: null,
      reminderData: {},
      timestamp: null,
    }
  },
  computed: {
    displayedDate() {
      let showDay = this.selectedInfo.day ? this.selectedInfo.day : this.currentDay;
      showDay = addZeroForNum(showDay);
      let currentYear = addZeroForNum(this.currentYear);
      let currentMonth = addZeroForNum(this.currentMonth);
      return `${currentYear}-${currentMonth}-${showDay}`
    },
    reminder() {
      return this.reminderData[this.timestamp] ? this.reminderData[this.timestamp].content : []
    }
  },

  methods: {
    selectToday() {
      let {day, year, month} = this.now;
      this.currentDay = day;
      this.currentYear = year;
      this.currentMonth = month;
      this.selectedInfo = {day, year, month};
      this.dayList = this.createDateList(this.currentYear, this.currentMonth);
      day = addZeroForNum(day), month = addZeroForNum(month);
      this.timestamp = `${year}-${month}-${day}`;
    },
    selectDay(date) {
      this.selectedInfo.day = date
      this.selectedInfo.month = this.currentMonth
      this.selectedInfo.year = this.currentYear;
      let {day, month, year} = this.selectedInfo;
      day = addZeroForNum(day), month = addZeroForNum(month);
      this.timestamp = `${year}-${month}-${day}`
    },
    createDateList(year, month) {
      year = typeof year === 'number' ? year : year - 0;
      month = typeof month === 'number' ? month : month - 0;
      let num = getWeekDay(year,month);
      let list = [];
      
      // 填充每月头部空白的几天
      for(let i = 0; i < num; i++) {
        list.push({
          content: '',
          type: 'pre'
        })
      };

      // 填充每月的天数
      let days = daysInMonth(year, month)
      for(let i = 0; i < days; i++) {
        list.push({
          content: i + 1,
          type: 'normal'
        })
      };
      
      return list;
    },

    init(){
      // 初始化当前的日期值
      let date = new Date();
      this.currentDay = date.getDate();
      this.currentMonth = date.getMonth() + 1;
      this.currentYear = date.getFullYear();

      //不会改变的时间常量，用于对比更新UI上当前日期的标志
      this.now.year = this.currentYear;
      this.now.month = this.currentMonth;
      this.now.day = this.currentDay;

      let list = this.createDateList(this.currentYear, this.currentMonth);
      this.dayList = list;

      //初始化折叠状态
      this.initFoldView();
    },
    switchBoard(info) {
      let {direction,foldState} = info;
      //when the board is open - foldState === false
      if(!foldState) {
        if(direction ==='next') {
          this.currentMonth += 1
          this.monthEdgeCaseCheck();
        }else {
          this.currentMonth -= 1
          this.monthEdgeCaseCheck();
        }
        this.dayList = this.createDateList(this.currentYear, this.currentMonth);
      }else {
        this.subListOperation(direction)
      }
    },
    toggleBoard() {
      this.foldState = !this.foldState;      
    },
    subListOperation(direction) {

      const edgeCaseCheck = ()=>{
        //翻到了上一个月
        if(this.subListInfo.startPosition < 0) {
          this.currentMonth -= 1;
          this.monthEdgeCaseCheck();
          this.dayList = this.createDateList(this.currentYear, this.currentMonth);
          this.subListInfo.startPosition = Math.floor(this.dayList.length / 7);
        }else if(this.subListInfo.startPosition > Math.floor(this.dayList.length / 7)) {
        //翻到了下一个月
          this.currentMonth += 1
          this.monthEdgeCaseCheck();
          this.dayList = this.createDateList(this.currentYear, this.currentMonth);
          this.subListInfo.startPosition = 0;
        }
      }


      if(direction === 'next') {
        this.subListInfo.startPosition += 1;
        edgeCaseCheck();
        this.subList = this.dayList.slice(this.subListInfo.startPosition * 7, this.subListInfo.startPosition * 7 + 7)
        return
      }
      this.subListInfo.startPosition -= 1;
      edgeCaseCheck();
      this.subList = this.dayList.slice(this.subListInfo.startPosition * 7, this.subListInfo.startPosition * 7 + 7)
    },
    monthEdgeCaseCheck() {
      if(this.currentMonth > 12) {
        this.currentYear +=1;
        this.currentMonth = 1;
      }else if (this.currentMonth < 1) {
        this.currentYear -=1;
        this.currentMonth = 12;
      }
    },
    initFoldView() {
      this.subListInfo.subListIndex = this.dayList.findIndex((i)=> {
        return i.content == this.currentDay
      })
      this.subListInfo.startPosition = Math.floor(this.subListInfo.subListIndex / 7);
      this.subList = this.dayList.slice(this.subListInfo.startPosition * 7, this.subListInfo.startPosition * 7 + 7)
    },
    async getReminderData () {
      let data = await import('../mock-data/reminder')
      this.reminderData = data.default;
    }
  },

  created() { 
    this.init();
    this.currentTab = this.tabOptions[0].sign
    this.timestamp = formateDateToStamp();
    this.getReminderData();
  },

  mounted() {
    window.onload = ()=> {
      const swiper = new Swipe('.date-header');
      swiper.onLeft(()=>{
        this.switchBoard({direction:'next', foldState:this.foldState})
      });
      swiper.onRight(()=>{ 
        this.switchBoard({direction:'last', foldState:this.foldState})
      });
      swiper.run();
    }
  },
  components:{
    Reminder
  }
}
</script>







<style lang="scss" scoped>
  $calbgTheme: #333333;
  /* $textColor: #DEDEDE; */
  $textColorWhite: #DEDEDE;
  $textColorGray: #C6C6C6;
  $colorTheme: #345795;
  $colorHighlight: #F29D38;

  .wrapper {
    width: 100%;

    .cal-header {
      span {
        padding: 15px 10px;
      }
      background: $calbgTheme;
      color: $textColorWhite;
    }

    .date-header {
      padding: 0 5px;

      .weekDay-header {
        span {
          font-size: .8em;
          width: 30px;
          height: 30px;
          /* padding: 10px 15px; */
          color: $textColorGray;
          margin: 0 15px;
        }
      }

      .main-block {
        
      }
    }

    .fold-btn {
      padding: 5px 0 15px 0;
      border-bottom: 1px solid $textColorGray;
      .arrow {
        span {
          border-bottom: 2px solid $colorTheme;
          border-right: 2px solid $colorTheme;
        }
      }
    }

    .date-options {
      border-bottom: 1px solid $textColorGray;
      box-shadow: 0px 2px 0px 0px rgba(238,238,238,1);
      span {
        padding: 10px 0;
        position: relative;
        &.active {
          color: $colorTheme;
          &:after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 70%;
            height: 3px;
            background: $colorTheme;
            transform: translateX(-50%);
          }
        }
      }
    }
  }


  .each-day {
    width: 30px;
    height: 30px;
    margin: 0 6px;
    border: 1px solid transparent;
    position: relative;

    &.currentDay {
      border: 1px solid $colorTheme;
      border-radius: 50%;
    }

    &.selectedDay {
      background: $colorTheme;
      color: $textColorWhite;
      border-radius: 50%;
    }

    &.dotted {

      &:after {
        content: '';
        position: absolute;
        bottom: 1px;
        left: 50%;
        margin-left: -3px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: $colorHighlight;
      }

    }
  }


</style>

