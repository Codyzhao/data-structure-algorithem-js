const Quene = function () {
  const items = [];

  this.enqueue = function(element) {
    items.push(element);
  }

  this.dequeue = function () {
    return items.shift();
  }

  this.front = function () {
    return items[0];
  }

  this.isEmpty = function () {
    return items.length === 0;
  }

  this.size = function () {
    return items.length;
  }

  this.getItems = function () {
    return items;
  }
}

const number = 3;
const names = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

const drum = function (names, number) {
  const queue = new Quene();

  for(let i = 0; i < names.length; i ++) {
    queue.enqueue(names[i]);
  }

  let toRemove;

  while(queue.size() > 1) {
    for(let j=0; j < number - 1; j++) {
      queue.enqueue(queue.dequeue());
    }
    
    toRemove = queue.dequeue();
    console.log('removed: ', toRemove);
  }

  return queue.dequeue();
}

console.log(drum(names, number));