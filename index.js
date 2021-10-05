//challenge rock.scissors/paper
function rpsGame(yourChoice){
  //console.log(yourChoice);
  var humainChoice,botChoice,message

  humainChoice=yourChoice.id;
  console.log(humainChoice);

  botChoice=NumberToChoice(randTorpsInt());
  console.log(['computer choice:',botChoice]);

  results=decidedWinner(humainChoice,botChoice);//[0,1]human lost|botwon
  console.log(results);

  message=finalMassage(results); //{'message':'You Won !','color':'green'}
  console.log(message);

  rpsFrontEnd(yourChoice.id,botChoice,message)

}

function randTorpsInt(){
  return Math.floor(Math.random()*3);

}
function NumberToChoice(number){
  return['rock','paper','scissors'][number]
}
function decidedWinner(yourChoice,computerChoice){
  var rpsDataBase={
    'rock':{'scissors':1,'rock':0.5,'paper':0},
    'paper':{'scissors':0,'rock':1,'paper':0.5},
    'scissors':{'scissors':0.5,'rock':0,'paper':1}
  };
  var yourScore=rpsDataBase[yourChoice][computerChoice];
  var computerScore=rpsDataBase[computerChoice][yourChoice];

  return [yourScore,computerScore];
}
function finalMassage([yourScore,computerScore]){
  if (yourScore===0){
    return{'message':'You Lost!','color':'red'};
  }else if (yourScore===0.5){
    return{'message':'You Tied !','color':'yellow'};
  }else{
    return{'message':'You Won !','color':'green'};
  }
}
function rpsFrontEnd(humainImageChoice,botImageChoice,finalMessage){
  var imageDatabase={
    'rock':document.getElementById('rock').src,
    'paper':document.getElementById('paper').src,
    'scissors':document.getElementById('scissors').src
  };
  console.log(imageDatabase[humainImageChoice]);
  //let's remove images

   document.getElementById('rock').remove();
   document.getElementById('paper').remove();
   document.getElementById('scissors').remove();

   /*var humanDiv= document.createElement('div');
   var botDiv=document.createElement('div');
   var messageDiv=document.createElement('div');

   humanDiv.innerHTML="<img src='"+ imageDatabase[humainImageChoice] + "'width=150  style='box-shadow=0px 10px 50px rgba(37,50,233,1);'>"
   botDiv.innerHTML="<img src='" + imageDatabase[botImageChoice] + "'  width=150  style=' box-shadow= 0px 10px 50px rgba(243,38,24,1);'>"
   messageDiv.innerHTML="<h1 style= 'color:"+finalMessage['color']+";  font-size:30px ; padding:30px'> " +finalMessage['message'] + " </h1>"

   document.getElementById('flex-box-rps div').appendChild(humanDiv);
   document.getElementById('flex-box-rps div').appendChild(botDiv);
   document.getElementById('flex-box-rps div').appendChild(messageDiv);*/
   var humanImage=document.createElement('img');
   var botImage=document.createElement('img');
   var evaluation=document.createElement('h1');

  humanImage.src= imageDatabase[humainImageChoice] ;
  botImage.src= imageDatabase[botImageChoice] ;
  evaluation.innerHTML="<h1 style= 'color:"+finalMessage['color']+";  font-size:50px ;'> " +finalMessage['message'] + " </h1>"

  humanImage.style.boxShadow="0px 10px 50px "+finalMessage['color']+"";
  botImage.style.boxShadow="0px 10px 50px rgba(37,50,233,1)";

  document.getElementById('flex-container1').appendChild(humanImage);
  document.getElementById('flex-container1').appendChild(evaluation);
  document.getElementById('flex-container1').appendChild(botImage);
}
