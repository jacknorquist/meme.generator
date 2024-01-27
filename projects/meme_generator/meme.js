let form = document.querySelector(".form");
let memeGrid = document.getElementById('meme-grid');
let memesCounter = 0;




form.addEventListener('submit', function (e) {
  e.preventDefault();
  let meme = document.createElement('div');
  meme.setAttribute('class', "p-2 meme col-4");



  let topText = document.createElement('h1');
  topText.innerHTML = document.querySelector("#text-on-top").value;
  topText.setAttribute('class', "top-text");

  let bottomText = document.createElement('h1');
  bottomText.innerHTML = document.querySelector("#text-on-bottom").value;
  bottomText.setAttribute('class', 'bottom-text');

  let img = document.createElement('img');
  img.src = document.querySelector("#url").value;
  img.setAttribute('class', 'meme-img');


  let deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', "dlt-btn");
  deleteButton.setAttribute('id', memesCounter + 1);
  deleteButton.innerHTML = "XXXXXX";


  meme.appendChild(topText);
  meme.appendChild(bottomText);
  meme.appendChild(img);
  meme.appendChild(deleteButton);

  memeGrid.appendChild(meme);

  document.querySelector("form").reset();

  meme.setAttribute('id', memesCounter + 1);
  deleteButton.setAttribute('id', memesCounter + 1);

  memesCounter++;


  deleteButton.addEventListener('click', function () {
    let dltID = deleteButton.id;
    let divDlt = document.getElementById(dltID);
    console.log(divDlt);
    divDlt.remove();
  });

});


