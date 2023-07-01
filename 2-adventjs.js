const year = 1985
const holidays = ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']

function countHours(year, holidays) {
  const validHolidays = holidays.filter(day => {
    const dateYear = new Date(`${year}/${day}`);
    const dayInWeek = dateYear.getDay();
    return dayInWeek > 0 && dayInWeek < 6;
  });

  const hours = validHolidays.length * 2;
  return hours;
}

countHours(year, holidays)