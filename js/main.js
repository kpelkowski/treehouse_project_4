
function active(){
  var searchBar = document.getElementById('search');

  if(search.value === 'Search'){
    search.value = ''
    search.placeholder = 'Search...'
  }
}

function inactive(){
  var searchBar = document.getElementById('search');

  if(search.value === ''){
    search.value = ''
    search.placeholder = 'Type to Search'
  }
}
