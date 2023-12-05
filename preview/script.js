const btn = document.getElementById('btn')
const overlay = document.querySelector('.overlay')


const delElem = (e) => {
    console.log((e.currentTarget));

    console.log((e.type));
  
}

btn.addEventListener('click', delElem)
overlay.addEventListener('click', delElem)


