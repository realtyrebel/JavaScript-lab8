//validate module
var validate = (function(){
	
    //create private and public functions/objects/variables to validate the form
    function validateProfile(e){
		
		e.preventDefault();
		
		var valid=true;
		
		//check fname field
		if(profile.fname.value === ""){
			document.getElementById('fnamewarning').innerHTML="First Name is empty";
			valid = false;
		}
		
		//check lname field
		if(profile.lname.value === ""){
			document.getElementById('lnamewarning').innerHTML="Last Name is empty";
			valid = false;
		}
		
		//check address field
		if(profile.address1.value === ""){
			document.getElementById('addresswarning').innerHTML="Address is empty";
			valid = false;
		}
		
		//check city field
		if(profile.city.value === ""){
			document.getElementById('citywarning').innerHTML="City is empty";
			valid = false;
		}
		
		//check province field
		if(profile.province.value === ""){
			document.getElementById('provincewarning').innerHTML="Select a Province";
			valid = false;
		}
		
		//check country field
		if(profile.country.value === ""){
			document.getElementById('countrywarning').innerHTML="Select a Country";
			valid = false;
		}
		
		if(valid){
			alert("Thank You");
		}
		
		return valid;
	}
	
	// Add an event to the form on submit to validate input
	document.profile.addEventListener("submit", validateProfile);
	
	//remove warning if fname has input
	document.getElementById("fname").addEventListener("blur", function(){
		if(this.value !== ""){
			fnamewarning.innerHTML = "";
		}
	});
	
	//remove warning if lname has input
	document.getElementById("lname").addEventListener("blur", function(){
		if(this.value !== ""){
			lnamewarning.innerHTML = "";
		}
	});
	
	//remove warning if address1 has input
	document.getElementById("address1").addEventListener("blur", function(){
		if(this.value !== ""){
			addresswarning.innerHTML = "";
		}
	});
	
	//remove warning if city has input
	document.getElementById("city").addEventListener("blur", function(){
		if(this.value !== ""){
			citywarning.innerHTML = "";
		}
	});
	
	//select a province
	document.getElementById("province").addEventListener("change", function(){
		if(this.value === "") {
			provincewarning.innerHTML="Select a Province";
		} else {
			provincewarning.innerHTML="";
		}
	});
	
	//select a country
	document.getElementById("country").addEventListener("change", function(){
		if(this.value === "") {
			countrywarning.innerHTML="Select a Country";
		} else {
			countrywarning.innerHTML="";
		}
	});
    
}());



