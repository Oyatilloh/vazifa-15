let data = JSON.parse(localStorage.getItem('data')) || []


data.forEach(value => {
	const newLiElement = document.createElement('li')
	newLiElement.textContent = value. 
	name + " " + value.region + " " + value.district
	client_list.appendChild(newLiElement)
})


form_element.addEventListener('submit', event => {
	event.preventDefault()
	const newLiElement = document.createElement('li')
	newLiElement.textContent = 
	name_element.value + " " + 
	region_element.value + " " + 
	dictict_element.value
	client_list.appendChild(newLiElement)
	data.push({
		name: name_element.value,
		region: region_element.value,
		district: dictict_element.value
	})
	localStorage.setItem('data', JSON.stringify(data))
	form_element.reset()
})

function selectLacation(r, d) {

r = document.querySelector('#region_element')
d = document.querySelector('#district_element')

	if(r.value = 'toshkent'){
		var optionArr = ['angren|Angren', 'Ohangaron', 'Olmaliq', 'Chirchiq']
	}
}


/*let form_element = document.querySelector('#form_element')
let data = JSON.parse(localStorage.getItem('data')) || []

data.forEach(value => {
	const newLiElement = document.createElement('li')
	newLiElement.textContent = value
	client_list.appendChild(newLiElement)
})
 form_element.addEventListener('submit', event => {
	event.preventDefault()
	const newLiElement = document.createElement('li')
	newLiElement.textContent = name_element.value
	client_list.appendChild(newLiElement)
	data.push(name_element.value)
	localStorage.setItem('data', JSON.stringify(data))
	form_element.reset()
})*/

/*const data =[
	{
		test: 2
	}
]
// localStorage.setItem('massive',)
const stringed = JSON.stringify(data)

console.log(JSON.parse(stringed));*/


// JSON = JavaScript Object Notation

 /*const name = localStorage.getItem("ism") || prompt("ismingiz")

localStorage.setItem("ism", name)
 name_element.textCont = name*/




