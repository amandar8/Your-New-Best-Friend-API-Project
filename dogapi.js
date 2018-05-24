(function() {

  let dogs = [];
  let searchBar = document.getElementById('search-bar');
  let searchButton = document.getElementById('search-button');
  let apiURL = `https://dog.ceo/api/breed/${searchBar.value}/images`;
  let randomButton = document.getElementById('random-button');

  randomButton.addEventListener('click', function(event) {
    event.preventDefault();
    let link = `https://dog.ceo/api/breeds/image/random`;
    console.log('click worked');
    fetch(link)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let dogPics = data.message;
        dogPictures.setAttribute('src', dogPics);
      })
    let x = document.createTextNode("Boop");
    document.body.appendChild(x);
  });


})();
