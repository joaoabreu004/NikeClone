const btnAbrir = document.querySelector('.carrinho-btn-abrir'); 
const btnFechar = document.querySelector('.carrinho-btn-fechar'); 
const asideLateral = document.querySelector('.carrinho-lateral'); 




btnAbrir.addEventListener('click', () => {
    asideLateral.classList.add('carrrinho-lateral--ativo')
})


btnFechar.addEventListener('click', () => {
    asideLateral.classList.remove('carrrinho-lateral--ativo')
})
