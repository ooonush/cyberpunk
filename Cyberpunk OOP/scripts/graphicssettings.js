const graphicsSettings = [
	"Very Low",
	"Low",
	"Medium",
	"High",
	"Ultra"
]

export function getNext(currentName){
	let currentIndex = graphicsSettings.indexOf(currentName)
	
	return graphicsSettings[(currentIndex + 1) % graphicsSettings.length]
}

export function getPrev(currentName){
	let currentIndex = graphicsSettings.indexOf(currentName)
	let prev = currentIndex - 1
	if (prev < 0)
		prev = graphicsSettings.length - 1
	return graphicsSettings[prev]
}