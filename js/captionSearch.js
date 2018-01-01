// Search to filter pictures with captions

function captionSearch() {

let input = document.getElementById('search').value.toUpperCase();

 for(let i = 0; i < document.images.length; i++){
    if(document.images[i].alt.toUpperCase().search(input) != '-1'){
      document.images[i].style.display = "inline";
      document.getElementsByTagName('li')[i].style.display = "inline";
    } else {
      //document.images[i].style.display = "none";
      document.getElementsByTagName('li')[i].style.display = "none";
    }
  }

}
