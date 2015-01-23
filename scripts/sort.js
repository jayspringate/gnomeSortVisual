var winList = [["Kentucky", .763],
							 ["Kansas", .722],
							 ["North Carolina", .737],
							 ["Duke", .706], 
							 ["Syracuse", .694], 
							 ["Temple", .643], 
							 ["UCLA", .693], 
							 ["St Johns", .653],
							 ["Notre Dame", .646],
							 ["Indiana", .639]];

$(document).ready(function() {
	$("#two").insertBefore("#one");

function gnomeSort() {
	var position = 0;
	var temp = 0;
	while (position < winList.length) {
		if (position == 0 || winList[position - 1][1] <= winList[position][1]) {
			position++;
		}	else {
			temp = winList[position - 1];
			tempPositionString = (position - 1).toString;
			winList[position - 1] = winList[position];
			winList[position] = temp;
			position--;
		}
	}
}
});

gnomeSort();

console.log(winList);

