(function(){

  const PARENT_URL = "https://www.memrise.com";
  const HOME_URL = PARENT_URL +"/home";

  var storage = Storage("extension-storage");
  var currentCourse  = new Course();

  function init(){
    var courses = $('.course-card-container')
    var database = storage.retrive();
    console.log(courses);
    $.each(courses,function(index,item){

        let link = $(item).find('p a');
        let id = item.id;
        let url = PARENT_URL + link.attr('href');
        let name = link.text();
        let tempCourse = new Course(id,name,url);

        if(! isCoursePresent(database,tempCourse)){
          database.push(tempCourse);
          console.error(database);
        }
        else{
          console.log("course already found")
        }

    })
    storage.commit(database);
  }

  function isCoursePresent(database,other){
    for(i in database){
      if(database[i].equals(other)){
        return true;
      }
    }
    return false;
  }



  document.onkeydown = function(e){
    if(e.shiftKey && e.key=="R"){
      //iterator *= -1;
      init();
    }
    // if(e.key=="F7"){
    //   classicReview();
    // }
    // if(e.key=="F9"){
    //   console.log('reseting currentlevel')
    //   resetCurrentLevel();
    // }
  }

}())
