# Instructions

Create a class called `PriorityQueue` that has the following methods defined.

The `PriorityQueue` should be **iterable** and iterating over it should give the values in the order of priority

## Input

_None_

## Output

A priority queue.

## Specification

The priority queue should have the following methods

- `add`  
  takes two parameters, the value and its priority and keeps them in the queue.
  `js priorityQueue.add(10, 1); `

- `peek`  
  Should let you see the top-priority element without removing it from the queue.
  _Assuming previous example ran successfully._

  ```js
  priorityQueue.peek();
  // 10
  ```

- `poll`  
  Should return the top-priority element and remove it from the queue.

  ```js
  priorityQueue.poll();
  // 10
  ```

- `changePriority`  
  Should be able to change priority of existing values to different ones. You can assume the values to be all numbers.

  ```js
  priorityQueue.add(100, 0);
  priorityQueue.add(200, 0);

  priorityQueue.changePriority(100, 10);
  ```

- `hasValue`  
  returns `true` or `false` denoting whether the value exists in the queue or not.

  ```js
  priorityQueue.add(15, 15);

  priorityQueue.hasValue(70); // false
  priorityQueue.hasValue(15); // true
  ```

- `size` _(is a getter property)_  
  tells the number of total elements in the queue.

## Example

```js
priorityQueue.add(10, 1);
priorityQueue.add(100, 0);
priorityQueue.add(200, 0);

Array.from(priorityQueue);
// => [100, 200, 10]
```

## Restrictions

- Don't use external libraries
