const allCoffes = window.document.getElementById('all-coffees')
allCoffes.innerHTML = '<h2> hey class </h2>'
// console.log('this is working')

// fetch info from sample apis
// window.fetch
fetch('https://api.sampleapis.com/coffee/hot')
.then((res) => res.json()) // converting response to json()
.then(data => {
     console.log(data)

    data.forEach((item) => {
        console.log('item ->', item)
        
        // item.innerHTML - no work
        const element = document.createElement('div')
        element.innerHTML = `<div>
        <img src='${item.image}' style= 'width:200px'>
        <h2>one item ok ${item.title}</h2>
        <p>${item.description}</p>
        <p>${item.ingredients}</p>
        </div>`
        allCoffes.appendChild(element)
    })
}) // get clean data
.catch(err => console.error(err))

// dsiplay all coffees into the our web