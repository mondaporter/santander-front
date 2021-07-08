
// Query selector buscará a cualquiera donde salga signup-form

const $forms = document.querySelector(".signup-form")

// fetch: asíncrona para obtener algo

const  getTemplate = () => {
    return fetch("./template.html").then((response) => response.text())
}

const sendEmailToApi = (address, template) => {
    fetch(`https://bedu-email-sender-api.herokuapp.com/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address: address,
        template: template,
      }),
    })
      .then((results) => {
        console.log(results);
        document.getElementById("email").value = ""
        alert("E-mail send!!!")
      })
      .catch((error) => {
        console.error(error);
        document.getElementById("email").value = ""
        alert("Send failed")
      });
  };
  
  const sendEmail = (event) => {
    event.preventDefault();
    const email = event.target.querySelector("input").value;
    getTemplate()
      .then((template) => {
        sendEmailToApi(email, template);
      })
      .catch((error) => {
        console.log(error, "error al convertir el template.")

function sendEmail(miVariable) {
    miVariable.preventDefault()
    const email = miVariable.target.querySelector("input").value
    getTemplate()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error, "error al obtener el template");
      })
  }


// const SendEmail = (params) => {
//     params.preventDefault()
//     console. log(params)

// console.log(forms);

for(let i = 0; i < forms.length; i++){

    // crear el evento
    forms[i].addEventListener("sumbit", sendEmail)
}