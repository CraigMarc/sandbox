


//get dates for the week
function getWeek() {
let curr = new Date 
let week = []

for (let i = 0; i <= 6; i++) {
  let first = curr.getDate() - curr.getDay() + i 
  let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
  week.push(day)
}
return week 
}
console.log(getWeek())


//get days of the month

function getDaysInMonth() {
    const d = new Date();
  let month = d.getMonth()
  let year = d.getFullYear()

    let date = new Date(year, month, 1);
    let days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date).toISOString().slice(0, 10));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }



  console.log(getDaysInMonth())
 
