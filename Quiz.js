class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  // play(){
  //   //write code here to hide question elements
  //   question.title.hide();
  //   question.button.hide();
  //   question.input1.hide();
  //   question.input2.hide();
   
  //   //write code to change the background color here
  //   background('cyan');

  //   //write code to show a heading for showing the result of Quiz
  //   var result = createElement('h1');
  //   result.html('Result of the Quiz');
  //   result.position(300,10);

  //   //call getContestantInfo( ) here

  //   //write condition to check if contestantInfor is not undefined
  //   if(allContestants != 0)
  //   {
  //     fill('red');
  //     textSize(20);
  //      //write code to add a note here
  //     text("NOTE: The Contestants who answered correct are highlighted in green",130,230);
  //   }
  //   //write code to highlight contest who answered correctly
  //   for(var plr in allContestants)
  //   {
  //     var correctAns = "2";
  //     if(correctAns ==  allContestant[plr].answer)
  //     {
  //       fill("Green");
  //       textSize(30);
  //       text(allContestant[plr].name +  correctAns,200,200);
  //     }
  //       else
  //       {
  //       fill("red");
  //       textSize(30);
  //       text(allContestant[plr].name +  allContestant[plr].answer,200,200);
  //       }
  //   }
    
  // }

  play()
  { 
    question.hide();
     background("Yellow");
      fill(0);
      textSize(30);
      text("Result of the Quiz",340, 50);
      text("----------------------------",320, 65);
      Contestant.getPlayerInfo();
      if(allContestants !== undefined)
      { debugger; 
        var display_Answers = 230; fill("Blue");
        textSize(20);
        text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230);
        for(var plr in allContestants)
          { 
            debugger;
            var correctAns = "2"; 
            if (correctAns === allContestants[plr].answer)
            fill("Green") 
            else 
            fill("red");
            display_Answers+=30;
            textSize(20); 
            text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers); 
                  } 
                } 
              } 
            }
