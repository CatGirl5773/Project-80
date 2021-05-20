guest_names_array = [];
function submit() {
    var input = document.getElementById("name_of_the_guest").value;
    guest_names_array.push(" " + input);
    document.getElementById("guest_names").innerHTML = guest_names_array;
}
function show() {
    var value = ""
    for (var j = 0; j < guest_names_array.length; j++) {
        value = value + guest_names_array[j] + "<br>";
    }
    document.getElementById("show_names").innerHTML = value;
    document.getElementById("sort").style.display = "inline-block"
}
function sort() {
    guest_names_array.sort();
    var value = "";
    for (var i = 0; i < guest_names_array.length; i++) {
        value = value + guest_names_array[i] + "<br>";
    }
    document.getElementById("sorted_names").innerHTML = value;
}
function searchName() {
    var searched_name = document.getElementById("search_guest_name").value;
	var counter = 0;
    for (i = 0; i < guest_names_array.length; i++) {
		console.log(guest_names_array[i]);
		if (searched_name == guest_names_array[i]) {
			counter++;
		}
	}
    document.getElementById("search_result").innerHTML = counter;
}