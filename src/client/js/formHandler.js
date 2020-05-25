async function handleSubmit(event){
  event.preventDefault()
  let formInput=document.getElementById('url_main').value;
  const valid=Client.checkForUrl(formInput);
    console.log("::: Form Submitted :::")
  if(!valid){
    alert("Invalid URL");
    return
  }  
  console.log("It's valid");
  await fetch ('http://localhost:8081/results', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({url:formInput})
    })
    .then(response => response.json()) 
    .then(function(response){
      document.getElementById("text").innerHTML =  response.text;
      document.getElementById('polarity').innerHTML =  response.polarity;
      document.getElementById('pop-con').innerHTML = response.polarity_confidence;
      document.getElementById('subjectivity').innerHTML= response.subjectivity;
      console.log(response);
    }).catch((error)=> {
      console.log(error);
    })
  }
export{handleSubmit }


