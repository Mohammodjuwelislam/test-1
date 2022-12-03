const manu_ber =document.querySelector('.manu-ber');
const manuOpen = document.querySelector('.fa-bars');
const manuCloss = document.querySelector('.fa-xmark');


manuOpen.addEventListener('click', ()=>{
    manuOpen.classList.add('hide');
    manuCloss.classList.remove('hide');
    manu_ber.classList.remove('manu-hidden');
})


manuCloss.addEventListener('click', ()=>{
    manuOpen.classList.remove('hide');
    manuCloss.classList.add('hide');
    manu_ber.classList.add('manu-hidden');
})