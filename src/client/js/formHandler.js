async function handleSubmit(event){
  event.preventDefault()
  let formInput=document.getElementById('url_main').value;
  const valid=Client.checkForUrl(formInput);
    console.log("::: Form Submitted :::")
  if(valid){
    await fetch ('http://localhost:8081/results', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({url:formInput})
    })
    .then(res => res.json())
    .then(function(res) {
      console.log(res);
      document.getElementById("text").innerHTML = "Text: " + res.text;
      document.getElementById('polarity').innerHTML = "Polarity: " +  res.polarity;
      document.getElementById('pop-con').innerHTML = "Polarity Confidence: " + res.polarity_confidence;
    })
  }
}
export{handleSubmit }