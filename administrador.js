window.onload = validar;
function validar(){
				var email = document.getElementById("email").value;
				var pass = document.getElementById("pass").value;
				if((email == "admi@gmail.com") && (pass== "1234")){
					alert('Es administrador');
					return true;
					}
					else{
					alert('No esta registrado');
					return false;
					}
}
