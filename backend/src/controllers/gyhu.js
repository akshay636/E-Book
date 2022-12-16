var num = "9088897541";
let count = 1;
let result = "no";
[num].forEach((n) => {
  let numChar = num.split("");
  result = "no";
  count = 1;
  let numMap = new Map();
  for (var i = 0; i <= numChar.length; i++) {
    var str = numChar[i];
    if (i != numChar.length - 1 && str == numChar[i + 1]) {
      count++;
    }
    if (count >= 3) {
      result = "yes";
      break;
    }
    if (numMap.has(str)) {
        numMap.set(str, numMap.get(str) + 1);
    } else {
        numMap.set(str, 1);
    }
  }

  numMap.values.map((val) => {
    if (i >= 4) {
      result = "yes";
    }
  });
  console.log(result);
});
