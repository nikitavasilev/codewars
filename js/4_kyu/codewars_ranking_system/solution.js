// Passed 43/55

class User {
  constructor() {
    this.rank = -8;
    this.progress = 0;
  }

  incProgress(rank) {
    if (rank > 8 || rank < -8 || rank === 0) {
      throw new Error(
        'The only acceptable range of rank values is [-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8].'
      );
    }
    let d;
    const rankValues = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
    const n = rankValues.length;

    if (rank >= this.rank) {
      if (this.rank < 1 && rank > -1) {
        d = Math.abs(rank - this.rank) - 1;
      } else {
        d = Math.abs(rank - this.rank);
      }
    } else {
      d = rank - this.rank;
    }

    if (d >= 1) {
      this.progress += 10 * d * d;
    } else if (d === 0) {
      this.progress += 3;
    } else if (d === -1) {
      this.progress += 1;
    }

    if (this.progress >= 100) {
      const index =
        rankValues.indexOf(this.rank) + Math.floor(this.progress / 100);

      if (index > n - 1) {
        this.rank = 8;
      } else {
        this.rank = rankValues[index];
      }
      this.progress = Math.floor(this.progress % 100);
    }
  }
}

const user = new User();
console.log(user.rank);
console.log(user.progress);
user.incProgress(8);
console.log(user.rank);
console.log(user.progress);
