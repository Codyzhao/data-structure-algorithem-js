const LinkedList = function () {
  let head = null;
  var length = 0;

  const Node = function (element) {
    this.element = element;
    this.next = null;
  }

  this.append = function (element) {
    const node = new Node(element);

    if(head === null) {
      head = node;
    } else {
      let current = head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }

    length++;
  }

  this.getHead = function () {
    return head;
  }

  this.insert = function (position, element) {
    if(position >= 0 && position < length) {
      const node = new Node(element);

      if(position === 0) {
        let current = head;
        head = node;
        node.next = current;
      } else {
        let index = 0;
        let current = head;
        let previous = null;

        while(index < position) {
          previous = current;
          current = current.next;
          index++;
        }

        previous.next = node;
        node.next = current;
      }
      length++;
    }
  }

  this.removeAt = function (position) {
    let removed = null;

    if(position >= 0 && position < length) {
      if(position === 0) {
        let current = head;
        head = current.next;
        removed = current;
      } else {
        let index = 0;
        let current = head;
        let previous = null;

        while(index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        
        previous.next = current.next;
        removed = current;
      }

      length--;
    }

    return removed;
  }

  this.indexOf = function (element) {
    let index = 0;
    let current = head;

    while(current) {
      if(element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }

    return -1;
  }

  this.remove = function (element) {
    return this.removeAt(this.indexOf(element));
  }

  this.size = function () {
    return length;
  }

  this.isEmpty = function () {
    return length === 0;
  }
}

const Dict = function () {

  const items = {};

  this.has = function (key) {
    return items.hasOwnProperty(key);
    // return key in items;
  }

  this.set = function (key, value) {
    items[key] = value;
  }

  this.delete = function (key) {
    if(this.has(key)) {
      delete items[key];
      return true
    }

    return false;
  }

  this.get = function (key) {
    if(this.has(key)) {
      return items[key];
    }

    return undefined;
  }

  this.getItems = function () {
    return items;
  }
}

const HashTable = function () {
  const items = [];

  const loseloseHashCode = function (key) {
    // ascii
    let hash = 0;
    for(let i = 0; i < key.length; i++) {
      hash += key[i].charCodeAt();
    }
    return hash % 37;
  }

  const djb2HashCode = function (key) {
    let hash = 5381;
    for(let i = 0; i < key.length; i ++) {
      hash = hash * 33 + key[i].charCodeAt();
    }
    return hash % 1013;
  }

  this.put = function (key, value) {
    items[djb2HashCode(key)] = value;
  }

  this.remove = function (key) {
    items[djb2HashCode(key)] = undefined;
  }

  this.get = function () {
    return items[djb2HashCode(key)];
  }

  this.getItems = function () {
    return items;
  }
}


const HashTableLinkedList = function () {
  const table = [];

  const loseloseHashCode = function (key) {
    // ascii
    let hash = 0;
    for(let i = 0; i < key.length; i++) {
      hash += key[i].charCodeAt();
    }
    return hash % 37;
  }

  const Node = function (key, value) {
    this.key = key;
    this.value = value;
  };
  
  this.put = function (key, value) {
    const position = loseloseHashCode(key);
    const node = new Node(key, value);
    if(!table[position]) {
      const l = new LinkedList();
      table[position] = l;
    }
    table[position].append(node);
  }

  this.get = function (key) {
    const position = loseloseHashCode(key);

    if(table[position]) {
      let current = table[position].getHead();
      
      while(current) {
        if(current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
    } else {
      return undefined;
    }
  }

  this.remove = function (key) {
    const position = loseloseHashCode(key);

    if(table[position]) {
      let current = table[position].getHead();
      
      while(current) {
        if(current.element.key === key) {
          table[position].remove(current.element);

          if(table[position].isEmpty()) {
            table[position] = undefined;
          }

          return true;
        }
        current = current.next;
      }
    } else {
      return undefined;
    }
  }
}

const HashTableLine = function () {
  const table = [];

  const loseloseHashCode = function (key) {
    // ascii
    let hash = 0;
    for(let i = 0; i < key.length; i++) {
      hash += key[i].charCodeAt();
    }
    return hash % 37;
  }

  const Node = function (key, value) {
    this.key = key;
    this.value = value;
  };

  this.put = function (key, value) {
    const position = loseloseHashCode(key);

    if(table[position] === undefined) {
      table[position] = new Node(key, value);
    } else {
      let index = position + 1;
      while(table[index] !== undefined) {
        index ++;
      }
      table[index] = new Node(key, value);
    }
  }

  this.get = function (key) {
    const position = loseloseHashCode(key);
    // console.log('position: ', position);
    if(table[position]) {
      if(table[position].key === key) {
        return table[position].value;
      } else {
        let index = position + 1;
        while(table[index].key !== key && table[index].key !== undefined) {
          index ++;
          if(key > table.length) {
            return undefined;
          }
        }
        return table[index].value;
      }
    }
  }

  this.remove = function (key) {
    const position = loseloseHashCode(key);

    if(table[position]) {
      if(table[position].key === key) {
        table[position] = undefined;
      } else {
        let index = position + 1;
        while(table[index].key !== key && table[index].key !== undefined) {
          index ++;
          if(key > table.length) {
            return false;
          }
        }
        table[index] = undefined;
        return true;
      }
    }
    return false;
  }

  this.getItems = function () {
    return table;
  }

}