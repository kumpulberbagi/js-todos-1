const fs = require('fs')

var display = () =>{
  console.log("<--------------------->")
  console.log("help");
  console.log("list");
  console.log("add <task_content>");
  console.log("save");
  console.log("delete <task_id>");
  console.log("complete <task_id>");
  console.log("uncomplete <task_id>");
  console.log("<-------------------->");
}

class Task{
  constructor(tugas){
    this.id = Data.allData.length + 1
    this.task = tugas
    this.complete = "[x]"
  }
}

class Data{

  constructor(tugas){
    this._tugas = tugas
    this.allData = []
  }
  get allData(){
    return this.allData
  }
  static parseJSON(){
    var data = fs.readFileSync('data.json','utf8')
    this.allData = JSON.parse(data)
    // console.log(this.allData);
    return this.allData
  }
  static take_task(){
    var result = [];
    for (var i = 0; i < this.parseJSON().length; i++){
      result.push(this.parseJSON()[i]['task'])
    }
    return result
  }

  static list(){
    for(var i = 0; i < this.take_task().length; i++){
      console.log(this.allData[i].id,this.allData[i].complete,this.take_task()[i])
    }
    return ""
  }

  static add_task(text){
    this.allData.push(new Task(text))
    console.log("Added " + text + " to your to do list!")
    this.save()
    return this.allData
  }

  static delete_task(id){
    console.log("Deleted " + this.allData[id - 1].task + " from your to do list")
    this.allData.splice((id - 1),1)
    this.save()
    return this.allData
  }

  static complete(id){
    this.allData[id -1].complete = "[v]"
    this.save()
  }

  static save(){
    fs.writeFile('data.json', JSON.stringify(this.allData), (err) => {
      if (err) throw err;
      console.log('It\'s saved!');
    });
  }
}

Data.parseJSON()
process.argv.forEach((val, index) => {
  process.argv.splice(0,2)
  var func = process.argv[0]
  var arg = process.argv[1]

  switch (func) {
    case "help":
        display();
      break;
    case "list":
      Data.list()
      break;
    case "add":
      Data.add_task(arg)
      break;
    case "delete":
      Data.delete_task(arg)
      break;
    case "complete":
      Data.complete(arg)
      break;
    case "save":
      Data.save()
      break;

    default:
        display();
  }
})

// Data.parseJSON();
// Data.list();
// Data.add_task("bangun")
// Data.save()
// Data.delete_task(3)
// console.log(Data.allData)
// display()
