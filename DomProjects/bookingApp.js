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

  const deleteButton = document.createElement('button');
  deleteButton.textContent='Delete';
  //to identify which user to delete
  deleteButton.setAttribute('data-email',user.email) 
  childElement.appendChild(deleteButton)
  parentElement.appendChild(childElement);

  //event listener for delete button
  deleteButton.addEventListener('click',function(){
    //remove from UI
    parentElement.removeChild(childElement);
    //remove form local storage
    localStorage.removeItem(user.email);
  });

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.setAttribute('data-email', user.email);
  childElement.appendChild(editButton);
  parentElement.appendChild(childElement);


  //event listener for delete button
  editButton.addEventListener('click',function(){
    //remove from UI
    parentElement.removeChild(childElement);
    //remove form local storage
    localStorage.removeItem(user.email);
  });
}
 








