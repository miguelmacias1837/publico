$(document).ready(function(){
	$('#btnenviar').click(function(){
		var nombre=$('#nombre').val();
		var email=$('#email').val();
		var contra=$('#contra').val();
		var fecha=$('#txtnacimiento').val();
		var pais=$('#pais').val();
	    var sexo=$('#sex').val();
		var datos={"nombre":nombre, "email":email, "contra":contra, "pais":pais, "sexo":sexo}
		$.ajax({
			type:"POST",
			URL:"http://localhost:3000/todo",
			dataType:"text",
			contentType:"text/plain",
			data: JSON.stringify(datos)
		}).done(function(msg){
			console.log(msg)
		}).error(function(err){
			console.log(err)
		})
	})
})