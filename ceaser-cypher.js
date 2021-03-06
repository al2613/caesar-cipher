function rot13 (str){
	
	// establish variables 
	var decodedmsg = []; 
	var currentPosition;
	var shiftedPosition;

	for (var i = 0; i<str.length; i++){ // loop through the entire length of the string 
		currentPosition = str.charCodeAt(i); // charCodeAt method returns ASCII number for each character 
		shiftedPosition = str.charCodeAt(i) + 13; // this will hold our encrypted information
		if (shiftedPosition > 122) {  // test to see if we need to go back to the beginning of the alphabet if ASCII goes beyond z
			decodedmsg.push(String.fromCharCode(96 + currentPosition-122+13)); // if it goes beyond 122 (z) go all the way back to the beginning and  
		} else { // return string created from unicode values and push to array 
			decodedmsg.push(String.fromCharCode(shiftedPosition));
		}
	}
	return decodedmsg.join(''); // join all the array elements into a string and return the string 
}
rot13("jurervfzlpbssrr");
