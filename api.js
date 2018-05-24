(function() {
let dogs = [];

function obtainDogs() {
  dogs.forEach(function(dog){
    document.getElementById('display-cat-name').textContent = dog.name;
    document.getElementById('dog-description-header').textContent = "Description";
    document.getElementById('dog-description').textContent = dog.desc;
  });
}

document.getElementById('search-form').addEventListener('submit', processSubmit);

  function processSubmit() {
    let searchString = validateSubmit();
    if (searchString === false) {
      console.log("Invalid search, try again!");
    }
    else {
      requestInformation(searchString);
    }
  }

  // function validateSubmit() {
  //   event.preventDefault();
  //   let searchString = document.getElementById('strain-name').value;
  //   searchString = searchString.trim();
  //   if (searchString.match(/^[\w]+([ ]?[\w]+)+$/gm)){
  //     clearSearch();
  //     return searchString;
  //   } else { return false; }
  // }
  //
  // function clearSearch() {
  //   document.getElementById('strain-name').value = "";
  // }
  //
  function requestInformation(search) {
    fetch(`https://dog.ceo/api/breeds/image/random${search}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        return;
      }
      dogs.push(data[0]);
      processSubmit();
    });
  // }
})();
