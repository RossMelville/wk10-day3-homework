var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var squareArray = [];

		arr.forEach( function( number ){
			squareArray.push(number**2);
		})
		return squareArray;
	},

	sum: function (arr) {
		var total = arr.reduce(function(accumulator, number){
			return accumulator + number;
		}, 0)
		return total;
	},

	findDuplicates: function (arr) {
			results = arr.filter(function(item, index){
				return arr.lastIndexOf(item) === index && arr.indexOf(item) != index;
			});
			return results;
	},

	removeAndClone: function (arr, valueToRemove) {
		results = arr.filter(function(item){
			return item !== valueToRemove
		});
		return results;
	},

	findIndexesOf: function (arr, itemToFind) {
		var indexArray = [];
		var index = arr.indexOf(itemToFind);
		while (index != -1){
			indexArray.push(index);
			index = arr.indexOf(itemToFind, index + 1)
		}
		return indexArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var evensSquared = [];
		arr.forEach(function(item){
			if((item % 2) === 0){
				evensSquared.push(item**2)
			}
		});
		return arrayTasks.sum(evensSquared);
	}

}

module.exports = arrayTasks
