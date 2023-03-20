class MyCircularQueue {
  items: number[];
  front: number;
  back: number;
  size: number;
  length: number;
  constructor(k: number) {
      this.items = [];
      this.front = 0;
      this.back = -1;
      this.size = k;
      this.length = this.items.length;
  }
  enQueue(value: number): boolean {
      if(this.isFull()) return false;
      this.back++;
      this.items[this.back % this.size] = value;
      this.length++;
      return true;
  }
  deQueue(): boolean {
      if(this.isEmpty()) return false;
      this.items[this.front % this.size] = null;
      this.front++;
      this.length--;
      return true;
  }
  Front(): number {
      if(this.isEmpty()) return -1;
      return this.items[this.front % this.size];
  }
  Rear(): number {
      if(this.isEmpty()) return -1;
      return this.items[this.back % this.size];
  }
  isEmpty(): boolean {
      return this.length === 0;
  }
  isFull(): boolean {
      return this.length === this.size;
  }
}