function checkForm(){
		
		var validation = 0;
		var name = document.getElementById('name').value;
		var email = document.getElementById('email').value;
		var subject = document.getElementById('subject').value;
		var message = document.getElementById('message').value;
		
		if(name == ''){
			document.getElementById('invalid_n').innerHTML = 'Please enter your name!';
			validation +=1;
		}else{
			document.getElementById('invalid_n').innerHTML = '';
		}
		
		if(email == ''){
			document.getElementById('invalid_e').innerHTML = 'Please enter your email!';
			validation +=1;
		}else{
			document.getElementById('invalid_e').innerHTML = '';
		}
		
		if(subject == ''){
			document.getElementById('invalid_s').innerHTML = 'Please enter subject!';
			validation +=1;
		}else{
			document.getElementById('invalid_s').innerHTML = '';
		}
		if(message == ''){
			document.getElementById('invalid_m').innerHTML = 'Please enter your message!';
			validation +=1;
		}else{
			document.getElementById('invalid_m').innerHTML = '';
		}
			
		
		if(validation != 0){
			return false;
		}else{
			return true;
		}
}