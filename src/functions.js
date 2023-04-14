/* this function adds 2 numbers */
function add(a, b) {
	return a + b;
}

/* this function returns average of 2 numbers */
function average(numbers) {
	return numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
}

/* return most frequent element in an array */
function mostFrequent(arr) {
	if (arr && arr.length > 0) {
		const count = arr.reduce((acc, item) => {
			acc[item] = acc[item] ? acc[item] + 1 : 1;
			return acc;
		}, {});
		return Object.entries(count).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
	} else {
		process.stdout.write("Please enter a valid input!");
	}
}

/* flattens an array */
function flatten(arr) {
	if (arr && arr.length > 0) {
		return arr.reduce((flat, item) => {
			return flat.concat(Array.isArray(item) ? flatten(item) : item);
		}, []);
	} else {
		process.stdout.write("Please enter a valid input!");
	}
}

function filterBy(objs, key, value) {
	return objs.filter((obj) => obj[key] === value);
}

function groupBy(objs, key) {
	return objs.reduce((groups, obj) => {
		const group = obj[key];
		groups[group] = groups[group] || [];
		groups[group].push(obj);
		return groups;
	}, {});
}

export { add, average, mostFrequent, flatten, filterBy };
