const crazyButton = document.querySelectorAll('.blast');

function goCrazy(){
  const offsetTop =  Math.random() * (window.innerHeight - this.clientHeight);
  const offsetLeft = Math.random() * (window.innerWidth - this.clientWidth);
  
 this.style.top = offsetTop + 'px';
 this.style.left = offsetLeft + 'px';
}
crazyButton.forEach(button => button.addEventListener('mouseenter', goCrazy));
crazyButton.forEach(button => button.addEventListener('click', goCrazy, true));