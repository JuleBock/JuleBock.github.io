function createMenuItem(item) {
	var menuItem = document.createElement("li")
	menuItem.classList.add("menu-item")

	var menuItemButton = document.createElement("button")
	menuItemButton.setAttribute("data-function", item.name)
	menuItemButton.addEventListener("click", menuItemClicked.bind(this))
	
	var menuItemButtonIcon = document.createElement("img")
	menuItemButtonIcon.src = item.image
	menuItemButton.appendChild(menuItemButtonIcon)

	var menuItemButtonText = document.createElement("span")
	menuItemButtonText.innerText = item.title
	menuItemButton.appendChild(menuItemButtonText)

	menuItem.appendChild(menuItemButton)
	document.getElementById("menu-items").appendChild(menuItem)
}

function createNewsItem(item, container) {
	var newsItem = document.createElement("li")

	var newsItemHeadline = document.createElement("h4")
	newsItemHeadline.innerText = item.headline + " (" + item.date + ")"
	newsItem.appendChild(newsItemHeadline)

	var newsItemContent = document.createElement("span")
	newsItemContent.innerText = item.content
	newsItem.appendChild(newsItemContent)

	container.appendChild(newsItem)
}
function createProductItem(item, container) {
	var productItem = document.createElement("li")

	var productItemName = document.createElement("h4")
	productItemName.innerText = item.name
	productItem.appendChild(productItemName)

	var productItemPhoto = document.createElement("img")
	productItemPhoto.setAttribute("src",item.image)
	productItem.appendChild(productItemPhoto)

	var productItemPrice = document.createElement("div")
	productItemPrice.innerText = item.price.replace(".",",") + " €"
	productItem.appendChild(productItemPrice)

	var productItemSeason = document.createElement("div")
	productItemSeason.innerText = "Saison: " + item.season
	productItem.appendChild(productItemSeason)

	var productItemStock = document.createElement("div")
	productItemStock.innerText = "Bestand: " + item.stock
	productItem.appendChild(productItemStock)

	container.appendChild(productItem)
}

function home() {
	var container = document.createElement("div")
	container.id = "home-container"

	var homeImage = document.createElement("img")
	homeImage.src = homeItem.image
	container.appendChild(homeImage)

	var homeHeadline = document.createElement("h1")
	homeHeadline.innerText = homeItem.headline
	container.appendChild(homeHeadline)

	var homeSubheadline = document.createElement("h3")
	homeSubheadline.innerText = homeItem.subheadline
	container.appendChild(homeSubheadline)

	document.getElementById("page").appendChild(container)
}

function news() {
	var newsContainer = document.createElement("ul")
	newsContainer.id = "news-container"

	newsItems=newsItems.sort(function(item1,item2) {
		if(new Date(item1.date) < new Date(item2.date) ){
			return 1
		} else if(new Date(item1.date) > new Date(item2.date) ){
			return -1
		} else {
			return 0
		}
	})
	newsItems.forEach(function(item) {
		createNewsItem(item, newsContainer)
	})
	document.getElementById("page").appendChild(newsContainer)
}

function shop() {
	var shopContainer = document.createElement("ul")
	shopContainer.id = "news-container"
	productItems.forEach(function(item) {
		createProductItem(item, shopContainer)
	})
	document.getElementById("page").appendChild(shopContainer)
}


function actions() {
	// TODO
}

function profile() {
}

function init() {
	menuItems.forEach(function(item) {
		createMenuItem(item)
	})
}

function menuItemClicked(event) {
	var buttonTarget = event.target.tagName.toLowerCase() == "button" ? event.target : event.target.parentElement
	document.getElementById("page").innerHTML = ""
	var functionName = buttonTarget.getAttribute("data-function")
	window[functionName]()
}

window.addEventListener("load", init)