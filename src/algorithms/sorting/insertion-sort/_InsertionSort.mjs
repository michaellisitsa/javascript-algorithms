import Sort from '../_Sort.mjs';

export default class InsertionSort extends Sort {
  sort(originalArray) {
    const array = [...originalArray];
    for (let i = 0; i < array.length; i += 1) {
      let j = i;
      while (j > 0 && this.comparator.lessThan(array[j], array[j - 1])) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
        j -= 1;
      }
    }
    return array;
  }
}
