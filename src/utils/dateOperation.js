/*
  @params
  year-number
  month-number
*/
export const getWeekDay = (year, month)=> {
  return new Date(year, month - 1, 1).getDay();
}

/*
  @params
  year-number
  month-number
*/
export const daysInMonth = (year, month)=> {
  let monthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    monthList[1] = 29;
  }
  return monthList[month - 1]
}

export const addZeroForNum = (num) => {
  return num - 0 < 10 ? '0' + (num - 0) : num;
}

export const formateDateToStamp = (date)=> {
  var d = date ? new Date(date) : new Date(),
  month = '' + (d.getMonth() + 1),
  day = '' + d.getDate(),
  year = d.getFullYear();
  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}