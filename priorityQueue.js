const PriorityQueue = function() {
  const items = [];

  const QueueItem = function(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function (element, priority) {
    const queueItem = new QueueItem(element, priority);
    let added = false;

    for(let i = 0; i < items.length; i++) {
      if(queueItem.priority > items[i].priority) {
        items.splice(i, 0, queueItem);
        added = true;
        break;
      }

      if(!added) {
        items.push(queueItem);
      }
    }
  }
}