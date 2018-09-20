function Course(id,name,path){
  this.id = id;
  this.name = name,
  this.currentLevel = 1;
  this.maxLevel = 1;
  this.url = path+"$/garden/classic_review/";
  this.iteration = 1;

  this.construct = function(other){
    this.id = other.id;
    this.name = other.name;
    this.currentlevel = other.currentlevel;
    this.maxLevel = other.maxLevel;
    this.url = other.url;
    this.iteration = other.iteration;
  }

  this.createAndClickLink = function(){
    let link = document.createElement("a");
    link.href = this.url;
    link.click();
  }
  this.equals = function(name){
    return (this.name === name);
  }
  this.reverse = function(){
    this.iteration *= 1;
  }

  this.classicReview = function(){
    this.currentLevel+= iterator;
    if(this.iterator < 0  && this.currentLevel<= 0 ){
      currentLevel = maxLevel;
    }
    if(this.iterator > 0 && this.currentLevel >= this.maxLevel){
      currentLevel = 1;
    }
    this.createAndClickLink(this.url.replace("$",this.currentLevel));
  }

  this.resetCurrentLevel = function(){
    if(this.iterator < 0)
      this.currentLevel = this.maxLevel+1;
    if(this.iterator > 0)
      this.currentLevel = 0;
  }

}
