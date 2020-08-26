const Set2 = function () {
  const items = {};

  this.has = function (value) {
    return items.hasOwnProperty(value);
  }

  this.remove = function (value) {
    if(!this.has(value)) {
      return false;
    }

    const removed = items[value];
    delete items[value];
    return removed;
  }

  this.add = function (value) {
    if(!this.has(value)) {
      items[value] = value;
      return true;
    }

    return false;
  }

  this.getItems = function () {
    return items;
  }

  this.clear = function () {
    items = {};
  }

  this.size = function () {
    return Object.keys(items).length;
  }

  this.isEmpty = function () {
    return Object.keys(items).length === 0;
  }

  this.value = function () {
    let values = [];

    for(let i in items) {
      if(items.hasOwnProperty(i)) {
        values.push(items[i]);
      }
    }

    return values;
  }

  this.union = function (otherSet) {
    const set = new Set2();
    let arr = this.value();

    for(let i = 0; i < arr.length; i++) {
      set.add(arr[i]);
    }

    arr = otherSet.value();
    for(let j = 0; j < arr.length; j++) {
      set.add(arr[i]);
    }

    return set;
  }

  this.intersection = function () {
    const set = new Set2();
    const arr = this.value();

    for(let i = 0; i < arr.length; i ++) {
      if(otherSet.has(arr[i])) {
        set.add(item(i));
      }
    }

    return set;
  }

  this.difference = function () {
    const set = new Set2();
    const arr = this.value();

    for(let i = 0; i < arr.length; i ++) {
      if(!otherSet.has(arr[i])) {
        set.add(item(i));
      }
    }

    return set;
  }
}