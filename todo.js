const fs = require('fs')

// var arr = []
// var newList = ["1. bake a delicious peanut butter cake"]
//
// process.argv.forEach((val, index) => {
//   arr.push(`${val}`)
// })
//   arr.splice(0,2)
//   console.log(arr)



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
    return this.allData
  }

  static delete_task(id){
    console.log("Deleted " + this.allData[id - 1].task + " from your to do list")
    this.allData.splice((id - 1),1)

    return this.allData
  }

  static complete(id){
    this.allData[id -1].complete = "[v]"
  }

  static save(){
    fs.writeFile('data.json', JSON.stringify(this.allData), (err) => {
      if (err) throw err;
      console.log('It\'s saved!');
    });
  }
}

Data.parseJSON();
Data.list();
// Data.add_task("bangun")
// Data.save()
// Data.delete_task(3)
// console.log(Data.allData)
