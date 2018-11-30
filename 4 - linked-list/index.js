// Linked List

function createNode(value) {
  return {
    value,
    next: null,
  };
}

function createLinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,
    push(value) {
      const node = createNode(value);

      if (this.head === null) {
        this.head = node;
        this.tail = node;
        // eslint-disable-next-line
        this.length++;
        return node;
      }

      this.tail.next = node;
      this.tail = node;
      // eslint-disable-next-line
      this.length++;

      return node;
    },
    pop() {
      if (this.isEmpty()) {
        return null;
      }

      const node = this.tail;

      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        // eslint-disable-next-line
        this.length--;

        return node;
      }

      let current = this.head;
      let penultimate;

      while (current) {
        if (current.next === this.tail) {
          penultimate = current;
          break;
        }
        current = current.next;
      }

      penultimate.next = null;
      this.tail = penultimate;
      // eslint-disable-next-line
      this.length--;

      return node;
    },
    get(index) {
      if (index < 0 || index > this.length) {
        return null;
      }

      if (index === 0) {
        return this.head;
      }

      let current = this.head;
      let i = 0;
      while (i < index) {
        // eslint-disable-next-line
        i++;
        current = current.next;
      }

      return current;
    },
    delete(index) {
      if (index < 0 || index > this.length) {
        return null;
      }

      if (index === 0) {
        const deleted = this.head;
        this.head = this.head.next;
        // eslint-disable-next-line
        i--;
        return deleted;
      }

      let current = this.head;
      let previous;

      let i = 0;

      while (i < index) {
        // eslint-disable-next-line
        i++;
        previous = current;
        current = current.next;
      }

      const deleted = current;

      previous.next = current.next;
      // eslint-disable-next-line
      this.length--;

      return deleted;
    },
    isEmpty() {
      return this.length === 0;
    },
    print() {
      const values = [];
      let current = this.head;

      while (current) {
        values.push(current.value);
        current = current.next;
      }

      return values.join(' => ');
    },
  };
}

export default createLinkedList;
