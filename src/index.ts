class Sorter {
  constructor(public collection: number[]) {}
  sort(): void {
  }
}

const sorter = new Sorter([9, 5, 13, -4])
sorter.sort()
console.log(sorter.collection)