function User() {
  this.rank = -8;
  this.progress = 0;
}

User.prototype.incProgress = (taskRank) => {
  if (taskRank > 8 || taskRank < -8 || !taskRank)
    throw new RangeError('Incorrect activity rank');
  if (this.rank === 8) return;

  let diff = taskRank - this.rank;
  if (taskRank * this.rank < 0) diff += taskRank < 0 ? 1 : -1;

  if (!diff) this.progress += 3;
  else if (diff === -1) this.progress += 1;
  else if (diff > 0) this.progress += 10 * diff * diff;
  else return;

  if (this.progress >= 100) {
    const oldRank = this.rank;
    this.rank += Math.floor(this.progress / 100);
    if (!this.rank || this.rank * oldRank < 0) this.rank++;
    if (this.rank >= 8) {
      this.rank = 8;
      this.progress = 0;
    }
    this.progress %= 100;
  }
};
