// /**
//  *
//  * Implement priority queue with Array
//  */
//  class PriorityQueue {
//   constructor() {
//     this.elements = [];
//     this.priorities = [];
//     // this.elements = [{value: '',priority: 0}, ]
//   }
//   add(value, priority) {
//     let flag = false;
//     this.priorities.map((currentPriority, index) => {
//       if (currentPriority > priority && !flag) {
//         this.priorities.splice(index, 0, priority);
//         this.elements.splice(index, 0, value);
//         flag = true;
//       }
//     });
//     if (!flag) {
//       this.elements.push(value);
//       this.priorities.push(priority);
//     }
//   }
//   isEmpty() {
//     return this.elements.length === 0;
//   }
//   peek() {
//     if (this.isEmpty()) {
//       throw new Error(`Can not perform peek operation on empty queue`);
//     }
//     return this.elements[0];
//   }
//   poll() {
//     if (this.isEmpty()) {
//       throw new Error(`Can not perform poll operation on empty queue`);
//     }
//     const firstElement = this.elements[0];
//     this.elements.shift();
//     this.priorities.shift();
//     return firstElement;
//   }
//   changePriority(value, newPriority) {
//     const valueIndex = this.elements.findIndex(
//       (currentValue) => currentValue === value
//     );
//     console.log({ valueIndex });
//     if (valueIndex === -1) {
//       throw new Error(`Queue does not have element with value ${value}`);
//     }
//     this.elements.splice(valueIndex, 1);
//     this.priorities.splice(valueIndex, 1);
//     this.add(value, newPriority);
//   }
//   hasValue(value) {
//     return this.elements.includes(value);
//   }
//   get size() {
//     return this.elements.length;
//   }
//   [Symbol.iterator]() {}
// }
// export { PriorityQueue };


class PriorityQueue {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  add(element, priority) {
    const qElement = new QElement(element, priority);
    let contain = false;
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].priority > qElement.priority) {
        this.items.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }
    if (!contain) {
      this.items.push(qElement);
    }
  }

  peek() {
    if (this.isEmpty()) {
      return 'No elements in Queue';
    }
    return this.items[0];
  }

  poll() {
    if (this.isEmpty()) {
      return 'Underflow';
    }
    return this.items.shift();
  }

  hasValue(args) {
    for (let i = 0; i < this.items.length; i += 1) {
      if (this.items[i].element === args) {
        return true;
      }
    }
    return false;
  }

  size() {
    if (this.isEmpty()) {
      return 'Underflow';
    }
    return this.items.length;
  }

  swap(a, b) {
    const tmp = this.items[a];
    this.items[a] = this.items[b];
    this.items[b] = tmp;
  }

  changePriority(firstTerm, secondTerm) {
    let i = 0;
    while (i < this.items.length) {
      if (this.items[i].element === firstTerm) {
        if (secondTerm < this.items[i].priority) {
          // move up
          this.items[i].priority = secondTerm;
          while (i > 0 && this.items[i - 1].priority > secondTerm) {
            this.swap(i - 1, i);
            i -= 1;
          }
        } else if (secondTerm > this.items[i].priority) {
          // move down
          this.items[i].priority = secondTerm;
          while (i < this.items.length - 1 && this.items[i + 1].priority < secondTerm) {
            this.swap(i + 1, i);
            i += 1;
          }
        }
        break;
      }
      i += 1;
    }
  }

  printPQueue() {
    let str = '';
    for (let i = 0; i < this.items.length; i += 1) { str += this.items[i].element + ' '; }
    return str;
  }
}

class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}
const priorityQueue = new PriorityQueue(); 

export {
  PriorityQueue,
};
