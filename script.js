replaceText(document.body)

async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText) 
  } else if (element.nodeType === Text.TEXT_NODE) {
    //console.log(element.textContent) //Find all Child elements with text as child
	stringValue = String(element.textContent)
	if (stringValue.length > 1){
		console.log(stringValue)
	postData('http://127.0.0.1:5000/api', { "text":element.textContent })
	  .then(data => {
		console.log(data['value']); // JSON data parsed by `data.json()` call
		console.log(element)
		if (data['value']=="Offensive"){
		const addNewElement = document.createElement('span')
		addNewElement.innerHTML = '<span class="blocktext">'
		element.replaceWith(addNewElement)
		}
	  });
	}
  }
}