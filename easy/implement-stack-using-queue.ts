class MyStack {
  q1: number[];
  q2: number[];
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  push(x: number): void {
    this.q1.push(x);

    while (this.q2.length !== 0) {
      this.q1.push(this.q2.shift());
    }

    let q = this.q2;
    this.q2 = this.q1;
    this.q1 = q;
  }

  pop(): number {
    if (this.empty()) {
      return;
    }
    return this.q2.shift();
  }

  top(): number {
    if (this.empty()) {
      return;
    }
    return this.q2[0];
  }

  empty(): boolean {
    return this.q2.length === 0;
  }
}
