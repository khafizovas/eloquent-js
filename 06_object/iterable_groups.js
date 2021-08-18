/*
  Make the Group class from the previous exercise iterable. Refer to the section about the 
  iterator interface earlier in the chapter if you aren’t clear on the exact form of the 
  interface anymore.

  If you used an array to represent the group’s members, don’t just return the iterator 
  created by calling the Symbol.iterator method on the array. That would work, but it defeats 
  the purpose of this exercise.

  It is okay if your iterator behaves strangely when the group is modified during iteration.

  // Your code here (and the code from the previous exercise)

  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c
*/

const Group = require('./groups');

Group.prototype[Symbol.iterator] = function () {
	return new GroupIterator(this);
};

class GroupIterator {
	constructor(group) {
		this.groupValues = group.values;
		this.currentIndex = 0;
	}

	next() {
		if (this.currentIndex === this.groupValues.length) {
			return { done: true };
		}

		return { value: this.groupValues[this.currentIndex++], done: false };
	}
}
