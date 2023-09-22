


async function contact(){
    console.log("Function was called")
    let name= document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let subject= document.getElementById("subject").value;
    let message= document.getElementById("message").value;
    
    const csrftoken = 
    document.querySelector('[name=csrfmiddlewaretoken]').value;

    const response =await fetch('contact/',{
        method:'POST',
        headers:{
        'X-CSRFToken':csrftoken,
        'Content-Type':'application/json'},

    mode: 'same-origin',
    body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message,
    }),

})   

console.log(await response.json)
console.log(await response.status)

if (await response.status === 200 ) {
    contactMessage = document.getElementById('sent-message')
    contactMessage.removeAttribute("hidden");
}
else if (await response.status === 500 ) {
    contactMessage = document.getElementById('error-message')
    contactMessage.removeAttribute("hidden");
}
return false;
}

























