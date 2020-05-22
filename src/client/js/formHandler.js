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
    .then(res => res.json()) 
    .then(function(response){
      document.getElementById("text").innerHTML = "Text: " + response.text;
      document.getElementById('polarity').innerHTML = "Polarity: " +  response.polarity;
      document.getElementById('pop-con').innerHTML = "Polarity Confidence: " + response.polarity_confidence;
      console.log(res);
    })
  }

export{handleSubmit }


