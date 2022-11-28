import { Lector } from "./Lector";
import {Pedido} from './Pedido';
import {Libro} from './Libro';

//Lector
const Ame = new Lector ("America Tronco","Callejon del metro  numero once",2741085640)
console.log(Ame);
const Pedro = new Lector ("Pedro Vera","Calle vicente guerrero",274102233)
console.log(Pedro);
const Angel = new Lector ("Angel Meza","Bugabilias",2741045757)
console.log(Angel);

//Libro
const Sol = new Libro ("Prietos en aprietos","Comedia","Segura Citlaly","jbuigyrf")
console.log(Sol);

//Pedido
const Cop=new Pedido (22,"loqquieras",2332);
Cop.agregar_pedido(Ame,1231);
Cop.agregar_pedido(Angel,12);
Cop.agregar_pedido(Pedro,2323);

console.log (Cop.listaPedido());

//console.log (Cop.buscar_Pedido(2));
//Cop.modificar(2,Pedro,2122,Sol,"TERMINADO");
//console.log(Cop.buscar_Pedido(2));
//Cop.eliminar(1);
//console.log("*****************************************************");
//console.log(Cop.listapedido());
