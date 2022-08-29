//switch control
let process = 1;
switch (process) {
  case 1:
    console.log("1st process done!");
    break;
  case 2:
    console.log("2nd process done!");
    break;
  case 3:
    console.log("3rd process done!");
    break;

  default:
    console.log("process not done!");
}

let day;
switch (new Date().getDay() + 2) {
  case 0:
    day = "sunday";
    break;
  case 1:
    day = "monday";
    break;
  case 2:
    day = "tuesday";
    break;
  case 3:
    day = "wednesday";
    break;
  case 4:
    day = "thursday";
    break;
  case 5:
    day = "friday";
    break;
  case 6:
    day = "saturday";
    break;
}
console.log(day);

let hour = 16;
switch (true) {
  case hour >= 6 && hour <= 12:
    console.log("good morning");
    break;
  case hour >= 13 && hour <= 17:
    console.log("good afternoon");
    break;
  case hour > 17 && hour < 24:
    console.log("good evening");
    break;
  case hour >= 0 && hour < 6:
    console.log("good night");
    break;
  default:
    console.log("wrong time");
}
