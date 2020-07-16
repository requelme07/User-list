const conatiner = document.querySelector('.container')

function getUsers (cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://reqres.in/api/users");

  xhr.addEventListener('load', () => {
    
    const userList = JSON.parse(xhr.responseText).data;
    cb(userList);
  });
  
  xhr.send();
};

getUsers(userList => {
  const fragment = document.createDocumentFragment();

  userList.forEach(element => {

    const card = document.createElement('div');
    card.classList.add('card');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = `${element.first_name} ${element.last_name}`;

    const userLink = document.createElement('a');
    userLink.classList.add('badge','badge-secondary');
    userLink.href = '/profile.html?userId=' + element.id;
    userLink.textContent = "Go to profile";

    cardBody.appendChild(title);
    cardBody.appendChild(userLink);
    card.appendChild(cardBody);
    fragment.appendChild(card);
  });

  conatiner.appendChild(fragment);

});



















