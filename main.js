function createGame(player1, hour, player2) {
  return `
  <li>
     <img src="./assets/icon-${player1}.svg" alt="bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="bandeira do ${player2}">
   </li>
  `
}
let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
  <div class="card" style="animation-delay: ${delay}s"> 
         <h2> ${date} <samp> ${day} </samp> </h2>
            <ul>
            ${games}
            </ul>
      </div>
  `
}

document.querySelector("#app").innerHTML = `

 <header>
  <img src="./assets/logo.svg" alt="logo da nlw">
  </header>

  <main id="cards">  
   ${createCard("20/11","terça", createGame("qatar", "13:00", "ecuador"))}

   ${createCard("21/11","quarta",
     createGame("england", "10:00", "iran") +
     createGame("senegal", "13:00", "netherlands") +
     createGame("usa", "16:00", "wales")
   )}

   ${createCard("22/11", "quinta", 
   createGame("argentina", "07:00", "saudi-arabia") +
   createGame("denmark", "10:00", "tunisia") +
   createGame("mexico", "13:00", "poland") + 
   createGame("france", "16:00", "australia")
   )}
  </main>
  
  `