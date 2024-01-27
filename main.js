// document.addEventListener('DOMContentLoaded', () => {
//   const body = document.querySelector('body');
//   const title = document.createElement('h1');
//   title.innerText = "Get Git";
//   body.appendChild(title);

//   const banner = document.querySelector("#background");
//   banner.style.background = "blue";
  

//   // const footer = document.getElementsByClassName('footer pt-8 pb-6 f6 color-fg-muted p-responsive');
//   // footer.style.color = 'white';

  
//   // fetch('https://github.com/gitbrendanlam/project-get-git/tree/main', {method: 'GET', mode: 'no-cors'})
//   //   .then( response => response.text())
//   //   .then(response => {console.log(response)});
//     // .then( (responseText) => {
//     //   const doc = new DOMParser().parseFromString(responseText, 'text/html');
//     //   const codeButton = doc.getElementById(':r5:');
//     //   codeButton.style.color = 'white';
//     //   console.log('accessed site');
//     // })
  
// })

// // ??? Access-Control-Allow-Origin: 'https://github.com/gitbrendanlam/project-get-git/tree/main' ???
// // Origin headers in the get request 

const contents = document.getElementById('contents');
contents.parentNode.removeChild(contents);
