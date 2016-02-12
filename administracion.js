window.addEventListener('load', function(){
    var usuarios = [[]];
    var pos=0;
    ///funcion de registro de usuario
    document.querySelector('#idbotonregistrar').addEventListener('click', registrar);
    function registrar(){
    var registro=true
    var user = document.querySelector('#iduserregistro').value;
    var pass = document.querySelector('#iduserpass').value;
        for (var i = 0; i < usuarios.length; i++) {
            if (user==usuarios[i][0]) {
                console.log("adada")
                registro=false
            }  
        }
        if (registro == true) {
            usuarios[pos]=[user,pass]
            pos++
            alert("Usuario Registrado con exito\nTu usuario registrado es: "+user+" Y tu contraseña es: "+pass)
        }
        else {
            alert("El nombre de usuario ya exciste en nuestra base de datos")
        }
    }   
    //funcion de logeo segun la base de datos
	document.querySelector('#idbotonlogin').addEventListener('click', nuevojuego);
	function nuevojuego() {
        var login = false;
	    var user = document.querySelector('#idusuariologin').value;
	    var pass = document.querySelector('#idpasslogin').value;
	    for (var i = 0; i <usuarios.length; i++) {
	        if (usuarios[i][0] == user && usuarios[i][1] == pass) {
	            login=true
	        }
	    }
	    if(login==true){
            alert("Ingresaste correctamente a tu cuenta")
	    }
	    else {
            alert("El usuario o contraseña es incorrecto")
	    }
	}
})