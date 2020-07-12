console.log("please enter the string to reverse");
process.stdin.on("data", function(data) {
  let res = data
    .toString()
    .split("")
    .reverse()
    .join("");
  console.log(res);
  console.log("please enter the string to reverse");
});
