const Stack = function () {
  const items = [];

  this.push = function (element) {
    items.push(element);
  }

  this.pop = function () {
    return items.pop();
  }

  this.peek = function () {
    return items[items.length - 1];
  }

  this.isEmpty = function () {
    return items.length === 0;
  }

  this.clear = function () {
    items = [];
  }

  this.size = function () {
    return items.length;
  }

  this.getItems = function() {
    return items;
  }
}


const divBy2 = function (number) {
  const stack = new Stack();
  let remain;
  let output = '';

  while(number > 0) {
    remain = number%2;
    stack.push(remain);
    number = Math.floor(number/2);
  }

  while(!stack.isEmpty()) {
    output += stack.pop();
  }

  return output;
}

console.log(divBy2(100));