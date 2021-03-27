let arrayPassword = []
let rew = []
function myFunction() {
    let x = document.querySelector("#myPsw").value;
    let r = document.querySelector("#tre").value;
	arrayPassword.unshift(x);
    rew.unshift(r);
	console.log(arrayPassword, rew)
}


function modals(){
	let bindModal = (triger, modal, clous) =>{
	triger.addEventListener('click', (e) => {
		if (e.target){
			e.preventDefault()
		}
	    modal.style.display = 'block' 
	    document.body.style.overflow = 'hidden'
	})
	clous.addEventListener('click', () => {
		modal.style.display = 'none'
		document.body.style.overflow = ''
	})
		
}
let openWindow = document.querySelector('.openModal'),
	    modalPopap = document.querySelector('.popupWindow'),
		modalClous = document.querySelector('.popupWindow .popup_clouse');
	
    bindModal(openWindow, modalPopap, modalClous)
}
modals()