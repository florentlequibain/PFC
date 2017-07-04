var scorePc = 0;
var scorePlayer = 0;
var choixPc;
var choixPlayer;

function random() {
  return Math.floor(Math.random() * 3);
  }




function compare (x,y){
  if (x == y ){
    alert('égalité, le pc a choisi ' + y + '(ton score= '+scorePlayer+',le score du pc= '+scorePc+')');
  } else if((x == 'pierre' && y =='ciseaux') || (x == 'ciseaux' && y == 'feuille') || (x == 'feuille' && y == 'pierre') ){
    scorePlayer++;
    alert('gangé, le pc a choisi ' + y+ '(ton score= '+scorePlayer+',le score du pc= '+scorePc+')');

  } else{
    scorePc ++;
    alert('perdu, le pc a choisi ' + y + '(ton score= '+scorePlayer+',le score du pc= '+scorePc+')');

  }
}


while(scorePlayer<3 && scorePc <3){
  var x = random();
  if (x === 0){
    choixPc = 'pierre';
  } else if (x === 1){
    choixPc = 'feuille';
  } else if (x === 2){
    choixPc = 'ciseaux';
  }
    choixPlayer = prompt('pierre , feuille ou ciseaux?');
    compare(choixPlayer,choixPc);
}
