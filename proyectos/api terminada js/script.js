const formulario = document.getElementById('formulario-categorias');
const input = document.querySelector('nueva categoria');
const divi = document.querySelector('#divi');

formulario.addEventListener('submit', (enviar) =>{
	const category = document.getElementById('option').value;
	enviar.preventDefault();
	console.log("a")
	console.log(category)

	const recibirChiste = async () =>{
		try{
			const respuesta = await fetch (`https://api.chucknorris.io/jokes/random?category=${category}`);
				console.log(respuesta)
				const datos = await respuesta.json();
				console.log(datos)
				divi.innerHTML = `<h1>EL CHISTE ES:</h1> ${datos.value}`
		}
		catch(error){
			console.log(error)
		}
	}
	

recibirChiste();

})
			