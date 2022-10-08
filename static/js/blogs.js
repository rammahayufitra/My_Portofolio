const one = document.querySelector('#one')
const two= document.querySelector('#two')
const three = document.querySelector('#three')

one.addEventListener('click', () => {
    document.querySelector('.first').style.display ="block";
    document.querySelector('.second').style.display ="none";
    document.querySelector('.third').style.display ="none";
    one.classList.add('active')
    two.classList.remove('active')
    three.classList.remove('active')
})

two.addEventListener('click', () => {
    document.querySelector('.first').style.display ="none";
    document.querySelector('.second').style.display ="block";
    document.querySelector('.third').style.display ="none";
    one.classList.remove('active')
    two.classList.add('active')
    three.classList.remove('active')
})

three.addEventListener('click', () => {
    document.querySelector('.first').style.display ="none";
    document.querySelector('.second').style.display ="none";
    document.querySelector('.third').style.display ="block";
    one.classList.remove('active')
    two.classList.remove('active')
    three.classList.add('active')
})