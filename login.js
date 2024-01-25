function validateSearch() {
    var searchInput = document.querySelector('.search input');

    if (searchInput.value.trim() === '') {
        alert('Please enter a search query.');
        return false;
    }

    return true;
}

function bookTable() {
    alert('Table booked! Thank you for choosing Fradel and Spies Restaurant.');
}


var searchButton = document.querySelector('.search button');
searchButton.addEventListener('click', function (event) {
    event.preventDefault();
    if (validateSearch()) {
        
        console.log('Search query:', document.querySelector('.search input').value);
    }
});

var bookTableButton = document.querySelector('.book button');
bookTableButton.addEventListener('click', function () {
    bookTable();
});
