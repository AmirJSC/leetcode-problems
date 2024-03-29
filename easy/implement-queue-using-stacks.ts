class MyQueue1 {
  stack1: number[];
  stack2: number[];
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  push(x: number): void {
    this.stack1.push(x);
  }
  pop(): number {
    if (this.stack2.length !== 0) {
      return this.stack2.pop();
    }
    while (this.stack1.length !== 0) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  }
  peek(): number {
    if (this.stack2.length !== 0) {
      return this.stack2[this.stack2.length - 1];
    }
    return this.stack1[0];
  }
  empty(): boolean {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}
