const main = document.querySelector('main');
const joke1 = "What's the best thing about Switzerland? I don't know, but the flag is a big plus.";
const joke2 = "What do you call a magic dog? A labracadabrador.";
const joke3 = "What did the buffalo say when his son left for college? Bison."; 
const template = `
     <h1>My jokes</h1>
     <ul>
            <li>${joke1}</li>
            <li>${joke2}</li>
            <li>${joke3}</li>
     </ul>
`
main.innerHTML = template;

const body = document.querySelector('body');
const p = document.createElement('p');
p.textContent = "That's all folks!";
body.appendChild(p);