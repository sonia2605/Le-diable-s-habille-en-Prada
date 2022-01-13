const form= document.querySelector('.form-quizz');
let tableauResultats = [];
const reponses =['a','c','a','c','c','b','a','c','b'];
const emojis=['👑','🌟','✨','💃','😊','🥺','👎','😭','👿','💩'];
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let verifTableau = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

//console.log(document.querySelector("input[name='q1']:checked").value);

for(i=1; i<10; i++){
    tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value);
}
    //console.log(tableauResultats);
    verifFunc(tableauResultats);
    tableauResultats=[];
})
function verifFunc(tabResultats) {

    for(let a = 0; a < 9; a++){

        if(tabResultats[a] === reponses[a]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }

    }

    // console.log(verifTableau);
    afficherResultats(verifTableau);
    couleursFonction(verifTableau);
    verifTableau = [];
}

function afficherResultats(tabCheck) {

    const nbDeFautes = tabCheck.filter(el => el !== true).length;
    // console.log(nbDeFautes);

    switch(nbDeFautes) {
        
        case 0:
            titreResultat.innerText = `👑 Bravo, c'est un sans faute ! 👑`
            aideResultat.innerText = 'Ce film n\'a aucun secret pour toi' 
            noteResultat.innerText = '9/9'
            break;
         case 1:
             titreResultat.innerText = `🌟 joli score !🌟 `
             aideResultat.innerText = 'La prochaine fois sera la bonne!'
            noteResultat.innerText = '8/9'
            break;   
        case 2:
            titreResultat.innerText = `✨ Bien joué ! ✨`
            aideResultat.innerText = 'Encore quelques petites erreurs à rectifier !'
            noteResultat.innerText = '7/9'
            break;
        case 3:
            titreResultat.innerText = `💃 C'est correct !💃 `
            aideResultat.innerText = 'A revoir, mais c\'est pas mal!'
            noteResultat.innerText = '6/9'
            break;
        case 4:
            titreResultat.innerText = `😊 Il reste quelques erreurs. 😊`
            aideResultat.innerText = 'Retente ta chance dans les cases rouges, puis valide à nouveau !'
            noteResultat.innerText = '5/9'
            break;
        case 5:
                titreResultat.innerText = `🥺 Bof... Tu peux mieux faire !  🥺`
                aideResultat.innerText = 'Réessaie des éléments vont te revenir !'
                noteResultat.innerText = '4/9'
                break;
        case 5:
                 titreResultat.innerText = `👎 Ce n'est pas ton film préféré ? 👎`
                 aideResultat.innerText = 'Tu peux toujours te refaire un apm TV pour corriger tes réponses !'
                 noteResultat.innerText = '3/9'
                break;   
        case 6:
            titreResultat.innerText = `😭 Pas super comme résultat ! 😭`
            aideResultat.innerText = 'Recommence, c\'est préférable !'
            noteResultat.innerText = '2/9'
            break;
        case 7:
              titreResultat.innerText = `👿 sans commentaire ! 👿`
            aideResultat.innerText = 'Courage ! Tu ne peux que t\'améliorer '
            noteResultat.innerText = '1/9'
            break;
         case 8:
                titreResultat.innerText = `💩Aïe ! Tu n'as pas vue le film ?!💩`
                aideResultat.innerText = 'Regarde-le vite avant de refaire le test !'
                noteResultat.innerText = '0/9'
            break;
        
        default:
            'Wops, cas innatendu.';

    }

}


function couleursFonction(tabValBool) {

    for(let j = 0; j < tabValBool.length; j++){

        if(tabValBool[j] === true){
            toutesLesQuestions[j].style.background = 'lightgreen';
        } else {
            toutesLesQuestions[j].style.background = '#ffb8b8';
            toutesLesQuestions[j].classList.add('echec');

            setTimeout(() => {
                toutesLesQuestions[j].classList.remove('echec');
            }, 500)
        }
        
    }

}

toutesLesQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = "white";
    })
})
