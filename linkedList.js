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