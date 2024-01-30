function greeting(name) {
  return `Hello ${name}`;
}

console.log("passed a value('john') :", greeting("John"));
console.log("no value passed undefined: ", greeting());

function greeting2(name = "Guest") {
  return `Hello ${name}`;
}

console.log("passed a value('john') :", greeting2("John"));
console.log("no value passed 'Guest': ", greeting2());

function addListItem(item, list = []) {
  list.push(item);
  return list;
}

// EACH TIME YOU CALL THE FUNCTION, THE LIST IS RESET
console.log("addListItem('apple')", addListItem("apple"));
console.log("addListItem('orange')", addListItem("orange"));
console.log("addListItem('banana')", addListItem("banana"));

// ADD TO THE LIST CREATED IN THE FUNCTION THE FIRST TIME
let listArray = [];
listArray = addListItem("apple");
console.log("listArray", listArray);
listArray = addListItem("orange", listArray);
console.log("listArray", listArray);
listArray = addListItem("banana", listArray);
console.log("listArray", listArray);

function isADateObject(date) {
  if (typeof date === "object" && date !== null && "getDate" in date) {
    return true;
  }
  return false;
}
console.assert(isADateObject() === false, "isADateObject()", "should be false");
console.log("isADateObject(1)", isADateObject(1));
console.log("isADateObject('a')", isADateObject("a"));
console.log("isADateObject([])", isADateObject([]));
console.log("isADateObject({})", isADateObject({}));
console.log("isADateObject(new Date())", isADateObject(new Date()));
console.log(
  "isADateObject(new Date('2020-01-01'))",
  isADateObject(new Date("2020-01-01"))
);
console.log("isADateObject('hello')", isADateObject("hello"));

// get a formatted date
function getFormatedDate(date = new Date()) {
  if (!isADateObject(date)) {
    console.error("getFormatedDate", "NOT a date", date);
    return;
  }
  // get the number of the day of the month
  const day = date.getDate();
  // getMonth() returns the month (from 0 to 11) for the specified date, according to local time.
  const month = date.getMonth() + 1;
  // getFullYear() returns the year (four digits for dates between year 1000 and 9999) of the specified date.
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
console.log("getFormatedDate()", getFormatedDate());
console.log("getFormatedDate(new Date())", getFormatedDate(new Date()));
console.log(
  "getFormatedDate(new Date('2020-01-01'))",
  getFormatedDate(new Date("2020-01-01"))
);
console.log(
  "getFormatedDate(new Date('1963-10-11'))",
  getFormatedDate(new Date("1963-10-11"))
);
console.log("getFormatedDate('hello')", getFormatedDate("hello"));

function logMessage(
  message = "No message passed",
  prefix = "INFO",
  date = new getFormatedDate()
) {
  const formattedDate = getFormatedDate(date);
  console.log(`${formattedDate} ${prefix}: ${message}`);
}

logMessage("This is a message");
logMessage("This is a message", "WARNING");
logMessage("This is a message", "ERROR", new Date("2020-01-01"));
logMessage("This is a message", "ERROR", new Date("1963-10-11"));
