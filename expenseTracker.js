function saveToLocalStorage(event){
    event.preventDefault();
    const amount = event.target.amount.value;
    const Description = event.target.Description.value;
    const category = event.target.category.value;

    // localStorage.setItem('amount',amount);
    // localStorage.setItem('Description',Description);
    // localStorage.setItem('category',category);

    const user = {
        amount,
        Description,
        category,
      };
      localStorage.setItem(user.Description, JSON.stringify(user));

      displayUsers(user);
}
function displayUsers(user){
    const parentElement = document.getElementById('Users');
    const childElement = document.createElement('li');
    childElement.textContent=user.amount +'-'+ user.Description +'-'+ user.category;
    parentElement.appendChild(childElement);

    const deleteButton = document.createElement('button');
    deleteButton.textContent='Delete';
    //to identify which user to delete
    deleteButton.setAttribute('data-Description', user.Description);
    childElement.appendChild(deleteButton);
    parentElement.appendChild(childElement);

    //event listener for delete button
    deleteButton.addEventListener('click',function(){
        //remove form UI
        parentElement.removeChild(childElement);
        //remove for local storage
        localStorage.removeItem(user.Description);
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.setAttribute('data-Description', user.Description);
    childElement.appendChild(editButton);
    parentElement.appendChild(childElement);
  
  
    //event listener for edit button
    editButton.addEventListener('click',function(){
      //remove from UI
      parentElement.removeChild(childElement);
      //remove form local storage
      localStorage.removeItem(user.Description);
    });
}