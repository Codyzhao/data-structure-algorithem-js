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

const Graph = function () {
  const vertices = [];
  const adjList = {};

  this.addVertex = function (v) {
    vertices.push(v);
    adjList[v] = [];
  }

  this.addEdge = function (a, b) {
    adjList[a].push(b);
    adjList[b].push(a);
  }

  this.print = function () {
    let s = '\n';
    for(let i = 0; i < vertices.length; i ++) {
      const vertex = vertices[i];
      let edges = adjList[vertex];
      
      s +=  vertex + ' => ';

      for(let j = 0; j < edges.length; j ++) {
        s += edges[j];
      }
      s += '\n';
    }
    console.log(s);
  }

  const initColor = function () {
    const color = {};

    for(let i = 0; i < vertices.length; i ++) {
      color[vertices[i]] = 'white';
    }

    return color;
  }

  // this.bfs = function (v, callback) {
  //   const color = initColor();

  //   const queue = new Quene();
  //   queue.enqueue(v);

  //   while(!queue.isEmpty()) {
  //     const now = queue.dequeue();
  //     const edges = adjList[now];
  //     for(let i = 0; i < edges.length; i++) {
  //       const vertex = edges[i];
  //       if(color[vertex] === 'white') {
  //         color[vertex] = 'grey';
  //         queue.enqueue(vertex);
  //       }
  //     }
  //     color[now] = 'black';

  //     if(callback) {
  //       callback(now);
  //     }
  //   }

  // }

  this.bfs = function (v, callback) {
    const color = initColor();

    const queue = new Quene();
    queue.enqueue(v);

    const distances = {};
    const pred = {};

    for(let i = 0; i < vertices.length; i++) {
      distances[vertices[i]] = 0;
      pred[vertices[i]] = null;
    }

    while(!queue.isEmpty()) {
      const now = queue.dequeue();
      const edges = adjList[now];
      for(let i = 0; i < edges.length; i++) {
        const vertex = edges[i];

        if(color[vertex] === 'white') {
          color[vertex] = 'grey';
          queue.enqueue(vertex);

          pred[vertex] = now;
          distances[vertex] = distances[now] + 1;
        }
      }
      color[now] = 'black';

      if(callback) {
        callback(now);
      }
    }

    return {distances, pred};

  }
}

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('A', 'D');
g.addEdge('C', 'D');
g.addEdge('B', 'E');
g.addEdge('F', 'B');

g.addEdge('D', 'F');

const s = g.bfs('A');
const shortest = function (from, to) {
  let v = to;
  const path = new Stack();
  while(v !== from) {
    path.push(v);
    v = s.pred[v];
  }
  path.push(v);
  
  console.log('path: ', path.getItems());
  var str = '';
  while(!path.isEmpty()) {
    str += path.pop() + '-';
  }
  str = str.slice(0, str.length - 1);
  console.log(str);
}

shortest('A', 'F');