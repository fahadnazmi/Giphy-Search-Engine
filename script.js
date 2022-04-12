function getUserInput() {
    var inputValue = document.querySelector(".search-text").value;
    return inputValue;
  }

document.querySelector(".search-btn").addEventListener("click", function () {
    var inputValue = document.querySelector(".search-text").value;
    var userInput = getUserInput();
    searchGiphy(userInput);
  });

  document.querySelector(".search-text").addEventListener("keyup", function (e) {
  
  if (e.which === 13) { 
    var userInput = getUserInput();
    searchGiphy(userInput);
  }
});



  function searchGiphy(searchQuery) {
    var url =
  "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q="
    + searchQuery;
        
    // AJAX Request
      
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open("GET", url);
    GiphyAJAXCall.send();
    
    GiphyAJAXCall.addEventListener("load", function (data) {
      var actualData = data.target.response;
      pushToDOM(actualData);
      console.log(actualData);
        
    });
  }

  function pushToDOM(response) {
  
    response = JSON.parse(response);
      
    var images = response.data;
    
    var container = document.querySelector(".js-container");

    container.scrollIntoView()
      
    container.innerHTML = "";
    
    images.forEach(function (image) {

    var src = image.images.fixed_height.url;
    
      container.innerHTML += "<img src='" 
        + src + "' class='container-image' />";
    });
  }

mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


