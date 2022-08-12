export function toSQLdateTime(datetime, val) {
  const userTimezoneOffset = datetime.getTimezoneOffset() * 60000;
  const d = new Date(datetime.getTime() - userTimezoneOffset);
  //  console.log("i   "+ d)
  const JSDT = JSON.stringify(d).slice(1, -1);
  const myArray = JSDT.split(".", 1)[0].split("T");
  // console.log("xfhdfhdh   "+ myArray)
  if (val == "date") {
    return myArray[0];
  } else if (val == "time") {
    return myArray[1];
  }
}

export function addTime(timeToMake, startTime) {
  let sum = toMinutes(timeToMake) + toMinutes(startTime);
  //console.log("pp  "+toMinutes(timeToMake));
  //console.log("oo  "+toMinutes(startTime));
  console.log("addTime  " + sum);
  console.log("to str  " + toStringTime(sum));
  return toStringTime(sum);
}

export function toMinutes(time) {
  let hour = time.split(":", 1);
  let all = time.split(":", 2);
  let minute = all.slice(1, 2);
  let sumTime = Number(minute) + Number(hour * 60);
  return sumTime;
}
export function toStringTime(time) {
  var hours = Number(time) / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  // console.log();
  return rhours + ":" + rminutes + ":00";
}
