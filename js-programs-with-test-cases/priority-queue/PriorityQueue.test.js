import { PriorityQueue } from './PriorityQueue';

describe('PriorityQueue', () => {
  it('should create default priority queue', () => {
    const priorityQueue = new PriorityQueue();
    expect(priorityQueue).toBeDefined();
  });
  it('should insert items to the queue and respect priorities', () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.add(10, 1);
    expect(priorityQueue.peek()).toBe(10);
    priorityQueue.add(5, 2);
    expect(priorityQueue.peek()).toBe(10);
    priorityQueue.add(100, 0);
    expect(priorityQueue.peek()).toBe(100);
  });
  it('should poll from queue with respect to priorities', () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);
    priorityQueue.add(200, 0);
    expect(priorityQueue.poll()).toBe(100);
    expect(priorityQueue.poll()).toBe(200);
    expect(priorityQueue.poll()).toBe(10);
    expect(priorityQueue.poll()).toBe(5);
  });
  it('should be possible to change priority of internal nodes', () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);
    priorityQueue.add(200, 0);
    // [100,200,10,5]
    // [200,10,5,100]
    // [200,5,100,10]
    priorityQueue.changePriority(100, 10);
    priorityQueue.changePriority(10, 20);
    expect(priorityQueue.poll()).toBe(200);
    expect(priorityQueue.poll()).toBe(5);
    expect(priorityQueue.poll()).toBe(100);
    expect(priorityQueue.poll()).toBe(10);
  });
  it('should be possible to change priority of head node', () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);
    priorityQueue.add(200, 0);
    priorityQueue.changePriority(200, 10);
    priorityQueue.changePriority(10, 20);
    expect(priorityQueue.poll()).toBe(100);
    expect(priorityQueue.poll()).toBe(5);
    expect(priorityQueue.poll()).toBe(200);
    expect(priorityQueue.poll()).toBe(10);
  });
  it('should throw an error if changing priority of element does not exist', () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.changePriority(10, 10);
    expect(() => priorityQueue.changePriority(100, 2)).toThrow();
  });
  it('should be possible to change priority along with node addition', () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);
    priorityQueue.add(200, 0);
    priorityQueue.changePriority(200, 10);
    priorityQueue.changePriority(10, 20);
    priorityQueue.add(15, 15);
    expect(priorityQueue.poll()).toBe(100);
    expect(priorityQueue.poll()).toBe(5);
    expect(priorityQueue.poll()).toBe(200);
    expect(priorityQueue.poll()).toBe(15);
    expect(priorityQueue.poll()).toBe(10);
  });
  it('should be possible to search in priority queue by value', () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.add(10, 1);
    priorityQueue.add(5, 2);
    priorityQueue.add(100, 0);
    priorityQueue.add(200, 0);
    priorityQueue.add(15, 15);
    expect(priorityQueue.hasValue(70)).toBeFalsy();
    expect(priorityQueue.hasValue(15)).toBeTruthy();
  });
});
