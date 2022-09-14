export class SysMod {
  constructor() {
    this.isActive = false;
    this.maxTemp = 35;
    this.minMoist = 0;
  }
  setIsActive(ia) {
    this.isActive = ia;
  }
  setMaxTemp(mt) {
    this.maxTemp = mt;
  }
  setMinMoist(mm) {
    this.minMoist = mm;
  }
}
