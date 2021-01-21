import React from "react";

export default function Promise() {

	let items;
	var arreglo = [{id: 0, name: 'zapatilla', description:'zapatilla de lona y suela de goma', stock: 55 }, {id: 1, name: 'Remera', description:'Remera de algodon manga corta', stock: 67 }, {id: 2, name: 'Jean', description: 'Jean 85% algodón 15% poliéster, fit ajustado ', stock: 71 }]
	var promise = new Promise((resolve, reject) => {
	  setTimeout(function(){
		resolve(console.log(JSON.stringify(arreglo)));
	  }, 3000);
	  if(typeof arreglo !== 'array'){
		reject(console.log("no se puedo resolver la promesa"))
	  }
	})
	
	promise.then((resolve)=> {
		console.log(resolve)
		items = resolve
	})
	.catch((error) => console.log(error))

  return (
    <div>
      <ul>
        {
          items?.map((item, indice) => {
            return <li key={indice}>{item.nombre} : $ {item.valor}</li>
            }
          )
        }
      </ul>
    </div>
  );
}
