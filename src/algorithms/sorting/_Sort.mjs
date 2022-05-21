import Comparator from '../../utils/comparator/Comparator';

export default class Sort {
  constructor(originalCallbacks) {
    this.callbacks = Sort.initSortingCallbacks(originalCallbacks);
    this.comparator = new Comparator(this.callbacks.compareCallback);
  }

  static initSortingCallbacks(originalCallbacks) {
    // 1. Retain compareCallback, otherwise undefined,
    //    otherwise leave it for the Comparator constructor.
    //     which will use a numeric comparison by default.
    const callbacks = originalCallbacks || {};
    const compareCallback = callbacks.compareCallback || undefined;
    // 2. Set visiting callback, or default to () => {}
    //    For tracking time complexity, replaced with jest.fn()
    //    which is also an empty func that jest can get info about no. calls.
    const fallbackCallback = () => {};
    const visitingCallback = callbacks.visitingCallback || fallbackCallback;
    return { compareCallback, visitingCallback };
  }

  sort() {
    throw new Error('sort method must be implemented');
  }
}
