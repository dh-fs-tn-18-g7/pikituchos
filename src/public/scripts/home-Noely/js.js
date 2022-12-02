

function validaEmail( email ) {
	var regex = /\S+@\S+\.\S+/;
	return regex.test( email );
}

function validarEmail( emailCapturadoDoFormulario ) {
	var validarRegExNoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if( emailCapturadoDoFormulario.match( validarRegExNoEmail ) ) {
		return true; 
	} else {
		return false; 
	}
}

var emailCapturado = "email@gmail.com";
console.log( validarEmail( emailCapturado ) );