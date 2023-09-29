const charactersOrder = [
	"Punk",
	"Biker",
	"Cyborg",
	"Brigand"
]

export function getNextCharacterName(currentCharacterName){
	let currentIndex = charactersOrder.indexOf(currentCharacterName)
	
	return charactersOrder[(currentIndex + 1) % charactersOrder.length]
}

export function getPrevCharacterName(currentCharacterName){
	let currentIndex = charactersOrder.indexOf(currentCharacterName)
	let prev = currentIndex - 1
	if (prev < 0)
		prev = charactersOrder.length - 1
	return charactersOrder[prev]
}