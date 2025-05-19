const inputSearch = document.querySelector('.input-search');
window.addEventListener('load', () => {
    let value = localStorage.getItem('value') || [];
    localStorage.removeItem('value');

    inputSearch.value = value;
    inputSearch.focus();
    let valueInput = inputSearch.value.toLowerCase();


    inputSearch.addEventListener('keyup', (e) => {
        let valueInput = inputSearch.value.toLowerCase();
        console.log(valueInput)
    })
});

