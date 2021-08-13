const SCRIPTS = require('./scripts');

// Copied from Eloquent JavaScript Chapter 5: https://eloquentjavascript.net/05_higher_order.html

function characterScript(code) {
	for (let script of SCRIPTS) {
		if (script.ranges.some(([from, to]) => code >= from && code < to)) {
			return script;
		}
	}

	return null;
}

function countBy(items, groupName) {
	const counts = [];

	for (let item of items) {
		const name = groupName(item);
		const known = counts.findIndex((counter) => counter.name == name);

		if (known == -1) {
			counts.push({ name, count: 1 });
		} else {
			++counts[known].count;
		}
	}

	return counts;
}

module.exports = { characterScript, countBy };
