const clickSearch = document.querySelectorAll('.clickSearch');
const Search = document.querySelector('.Search');
const overlaySearch = document.querySelector('.overlay-search');
const showSearch = document.querySelector('.showSearch');

clickSearch.forEach(item => {
    item.addEventListener('click', () => {
        overlaySearch.classList.add('active');
        showSearch.classList.add('active');
        
        setTimeout(() => {
            Search.focus();
        }, 50)

        overlaySearch.addEventListener('click', () => {
            overlaySearch.classList.remove('active');
            showSearch.classList.remove('active');
        })
    })
})
    	

Search.addEventListener('keyup', (e) => {

    let value = document.querySelector('.Search').value;

    if(Search.value.length > 0 && e.key === 'Enter'){
        window.location.href = 'components/search.html';

        localStorage.setItem('value', value);
    }
})