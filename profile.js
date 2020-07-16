
let urlParams = new URLSearchParams(window.location.search);

let userId = urlParams.get('userId');

const conatiner = document.querySelector('.container')

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://reqres.in/api/users/" + userId);

  xhr.addEventListener('load', () => {
    const user = JSON.parse(xhr.responseText).data;
    
    const fragment = document.createDocumentFragment();

    const card = document.createElement('div');
    card.classList.add('card');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const image = document.createElement('img');
    image.classList.add('img-thumbnail');
    image.src = user.avatar;

    const linkEmail = document.createElement('a');
    linkEmail.classList.add('card-text','badge-secondary','badge');
    linkEmail.href = 'https://reqres.in/';
    linkEmail.textContent = user.email;

    cardBody.appendChild(image);
    cardBody.appendChild(linkEmail);
    card.appendChild(cardBody);
    fragment.appendChild(card);
    conatiner.appendChild(fragment);
    
  });
  
  xhr.send();