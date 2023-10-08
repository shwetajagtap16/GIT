//local storage 
function saveToLocalStorage(event){
    const name=event.target.name.value;
    const email= event.target.email.value;
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);


}

