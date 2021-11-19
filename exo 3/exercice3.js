/* Voici un exemple de fonction retournant du texte, inspirez vous de cet exemple pour réaliser l'exercice */

function txtInsert(texte){
    alert("J'aime js");
    return texte;
}

txtInsert(1);

function backgroundSet(back){
   alert("magenta");
    return back;
}

backgroundSet(1);

/* Ne modifiez pas le code suivant */

document.getElementById('container').innerHTML = txtInsert();
document.getElementById('container').style.background = backgroundSet();




