class RecentCounter1 {
  pings: number[];
  constructor() {
    this.pings = [];
  }

  ping(t: number): number {
    this.pings.push(t);
    let low = t - 3000;
    let count = 0;
    this.pings.map((ping) => {
      if (ping >= low && ping <= t) count++;
    });
    return count;
  }
}

class RecentCounter2 {
  pings: number[];
  constructor() {
    this.pings = [];
  }

  ping(t: number): number {
    this.pings.push(t);
    let low = t - 3000;
    while (this.pings.length !== 0) {
      if (this.pings[0] < low) {
        this.pings.shift();
      } else {
        break;
      }
    }
    return this.pings.length;
  }
}
