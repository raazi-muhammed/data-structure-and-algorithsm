class Node {
  constructor(value) {
    this.value = value;
    this.down = null;
  }
}

class Stack {
  top = null;
  size = 0;
  limit = null;

  constructor(values = []) {
    if (values.length <= 0) {
      this.top = null;
      this.size = 0;
    } else {
      values.map((val) => {
        this.push(val);
      });
    }
  }

  push(value) {
    if (this.limit != null && this.size >= this.limit) return;

    const node = new Node(value);

    if (this.size > 0) node.down = this.top;
    this.top = node;

    this.size++;
  }

  pop() {
    if (this.size <= 0) return;
    this.top = this.top.down;
    this.size--;
  }

  setLimit(val) {
    this.limit = val;
  }

  getValues() {
    let array = [];
    let current = this.top;
    while (current) {
      array.push(current.value);
      current = current.down;
    }

    return array;
  }
}

module.exports = { Stack };
