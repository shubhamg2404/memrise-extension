(function(){

  var reviewLink = "https://www.memrise.com/course/121215/barrons-800-essential-word-list-gre/$/garden/classic_review/?source_element=level_details_session&source_screen=level_details";
  var iterator = 1;

  document.onkeydown = function(e){

    if(e.shiftKey && e.key=="R"){
      iterator *= -1;
    }

    if(e.key=="F7"){
      classicReview();
    }
    if(e.key=="F9"){
      console.log('reseting currentlevel')
      resetCurrentLevel();
    }
  }


  function classicReview(){
    let maxLevel = getNumber("maxLevel");
    let currentLevel = getNumber("currentLevel");
    if(isNaN(maxLevel)){
      maxLevel = 50;
      localStorage.setItem('maxLevel',maxLevel);
    }
    if(isNaN(currentLevel)){
      currentLevel = maxLevel;
    }
    currentLevel+= iterator;
    if(iterator < 0  && currentLevel<= 0 ){
      currentLevel = maxLevel;
    }
    if(iterator > 0 && currentLevel >= maxLevel){
      currentLevel = 1;
    }
    localStorage.setItem('currentLevel',currentLevel);
    console.log(currentLevel)
    //createAndClickLink(reviewLink.replace("$",currentLevel));
  }
  function getNumber(key){
    return Number.parseInt(localStorage.getItem(key));
  }

  function resetCurrentLevel(){
    let maxLevel = getNumber("maxLevel");
    let currentLevel = getNumber("currentLevel");

    if(iterator < 0)
      currentLevel = maxLevel;
    if(iterator > 0)
      currentLevel = 1;
    localStorage.setItem('currentLevel',currentLevel);
  }

  function createAndClickLink(url){
    let link = document.createElement("a");
    link.href = url;
    link.click();
  }
}())
