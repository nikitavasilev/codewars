class User {
  constructor() {
    this.rankArr = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
    this.pos = 0;
    this.rank = this.rankArr[this.pos];
    this.progress = 0;
  }

  incProgress(n) {
    const newPos = this.rankArr.indexOf(n);
    if (newPos === -1) {
      throw new Error();
    }
    const posSpan = newPos - this.pos;
    if (posSpan === 0) {
      this.progress += 3;
    } else if (posSpan === -1) {
      this.progress += 1;
    } else if (posSpan > 0) {
      this.progress += posSpan * posSpan * 10;
    }
    const rankUp = Math.floor(this.progress / 100);
    this.progress -= rankUp * 100;
    this.pos += rankUp;
    this.rank = this.rankArr[this.pos];
    this.progress = this.rank === 8 ? 0 : this.progress;
  }
}

const user = new User();
console.log(user.rank);
console.log(user.progress);
user.incProgress(8);
console.log(user.rank);
console.log(user.progress);
