const btn = document.querySelector('[role="fleeing-btn"]')
const body = document.querySelector('body')
const counter = document.querySelector('[role="counter"]')

const appearClass = 'appear'
const disappearClass = 'disappear'
const disappearDuration = 200 //ms

let animationRunning = false
let timesCatched = 0

btn.onmouseover = (e) => {
	if (!animationRunning) {
		animationActive = true
		disappear(btn)
		
		setTimeout(() => {
			move(btn)
		}, disappearDuration)
		
		setTimeout(() => {
			appear(btn)
			animationRunning = false
		}, randrange(750, 1100))
	}
}

btn.onclick = () => {
	timesCatched += 1
	updateCounter()
	body.style.backgroundColor = '#3CB371'
	setTimeout(() => {
		body.style.backgroundColor = '#111'
	}, 300)
}

const appear = (el) => {
	el.classList.add(appearClass)
	el.classList.remove(disappearClass)
}

const disappear = (el) => {
	el.classList.add(disappearClass)
	el.classList.remove(appearClass)
}

const move = (el) => {
	el.style.setProperty('top', `${randrange()}%`)
	el.style.setProperty('left', `${randrange()}%`)
}

const randrange = (min=15, max=85) => {
	return Math.max(min, Math.floor(Math.random() * max))
}

const updateCounter = () => {
	counter.innerText = timesCatched
}

window.onload = (e) => {
	updateCounter()
}