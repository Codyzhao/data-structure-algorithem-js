const LinkedList = function () {
  let head = null;
  var length = 0;

  const Node = function (element) {
    this.element = element;
    this.next = null;
  }

  this.insert = function (position, element) {

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

  }

  this.indexOf = function (element) {

  }

  this.remove = function (element) {

  }

  this.removeAt = function (position) {

  }
}