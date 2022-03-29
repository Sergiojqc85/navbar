const productos = [
    {id:'01', name:'random1', description:'producto1', img:'./img/img01.jpg'},
    {id:'02', name:'random2', description:'producto2', img:'./img/img02.jpg'},
    {id:'03', name:'random3', description:'producto3', img:'./img/img03.jpg'},
    {id:'04', name:'random4', description:'producto4', img:'./img/img04.jpg'},
    {id:'05', name:'random5', description:'producto5', img:'./img/img05.jpg'},
    {id:'06', name:'random6', description:'producto6', img:'./img/img06.jpg'},
    {id:'07', name:'random7', description:'producto7', img:'./img/img07.jpg'},
    {id:'08', name:'random8', description:'producto8', img:'./img/img08.jpg'},
    {id:'09', name:'random9', description:'producto9', img:'./img/img09.jpg'}
  ]

  export const getProductos = new Promise ((resolve, reject) => {

  let condition = true
  if(condition){
    setTimeout(() => {
      resolve(productos)

    }, 3000);
  }else{
    reject('Salio mal')
  }
})