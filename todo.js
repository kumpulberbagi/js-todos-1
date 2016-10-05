const fs = require('fs')

// var arr = []
// var newList = ["1. bake a delicious peanut butter cake"]
//
// process.argv.forEach((val, index) => {
//   arr.push(`${val}`)
// })
//   arr.splice(0,2)
//   console.log(arr)

class Data{
  constructor(tugas){
    this.id = data.length
  }
}

class Task{

  constructor(tugas){
    this._tugas = tugas
    this.listAll = []
  }
  static parseJSON(){
    var data = fs.readFileSync('data.json','utf8')
    var listAll = []
    data = JSON.parse(data)
    // for (var i = 0; i < data.length; i++){
    //   listAll.push(data[i]['task'])
    // }
    return data
  }

  static list(){
    for(var i = 0; i < data.length; i++){
      console.log(data[i])
    }
  }

  // static add(text){
  //   data.push(new Data(text))
  //
  // }
}
//menampilkan daftar todo


//menambahkan tugas ke dalam list
// function add = (text) => {
//   list.push(new Task(text))
// }

//dapatkan tugas yg harus dilakukan

//hapus tugas dari list todo

//tandai tugas yang sudah selesai

//parsing input dari user dan jalankan yang diperintahkan user

//parse file data.json
console.log(task.list())
