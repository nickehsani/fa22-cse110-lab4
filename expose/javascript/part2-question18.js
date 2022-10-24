function localTime() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}
//Prints local time every second
setInterval(localTime, 1000);
