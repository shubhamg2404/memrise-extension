
function Storage(databaseName){
  let name = databaseName;

  if(name == null || typeof name !== "string"){
    console.error("invalid database name");
    return false;
  }

  var commit = function(database){
    if(typeof database ==="object" || typeof database === "list"){
      database = JSON.stringify(database);
    }
    localStorage.setItem(name,database);
  }
  var retrive = function(){
    let list = localStorage.getItem(name);
    if(list === undefined){
      list = [];
      commit(list);
    }
    list = JSON.parse(list);
    database = [];

    $.each(list,function(index,item){
      var nCourse = new Course();
      nCourse.construct(item)
      database.push()
    })

    return database;
  }
  return {
    "commit":commit,
    "retrive":retrive
  }
}
