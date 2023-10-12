//local storage 
function saveToLocalStorage(event){
  event.preventDefault();
    const name=event.target.name.value;
    const email= event.target.email.value;
    // localStorage.setItem('name',name);
    // localStorage.setItem('email',email);

    const user = {
        name,
        email,
      };
      localStorage.setItem(user.email, JSON.stringify(user));
      
      displayUsers(user);
}
function displayUsers(user) {
  const parentElement = document.getElementById('users');
  const childElement = document.createElement('li');
  childElement.textContent= user.name + '-'+ user.email
  parentElement.appendChild(childElement);
}

