// Queues

function createQueue() {
  const queue = [];

  return {
    enqueue(item) {
      // add item to queue
      queue.unshift(item);
    },
    dequeue() {
      // remove item from queue
      return queue.pop();
    },
    peek() {
      // check on next item to be removed in queue
      return queue[queue.length - 1];
    },
    get length() {
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0;
    },
  };
}

export default createQueue;
