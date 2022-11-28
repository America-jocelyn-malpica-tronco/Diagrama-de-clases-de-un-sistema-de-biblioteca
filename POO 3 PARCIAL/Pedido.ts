import { Lector } from './Lector';
import { Libro } from './Libro';    

export class Pedido{
    
    private IdUsua:number=0;
    public TituloMaterial:string="";
    private Codigo:number=0;
    private id=0;
    private pedido:any []=[];
    
    constructor (IdUsua:number,TituloMaterial:string,Codigo:number){
        this.IdUsua=IdUsua;
        this.TituloMaterial=TituloMaterial;
        this.Codigo=Codigo;
    }
    public set_IdUsua (IdUsua:number){
        this.IdUsua=IdUsua;
    }
    public  get_IdUsua ():number{
        return this.IdUsua;
    }
    public  set_TituloMaterial (TituloMaterial:string){
        this.TituloMaterial=TituloMaterial;
    }
    public  get_TituloMaterial ():string{
        return this.TituloMaterial;
    }
    public  set_Codigo (Codigo:number){
        this.Codigo=Codigo;
    }
    public  get_Codigo ():number{
        return this.Codigo;
    }
    public listapedido(){
        console.log(this.pedido);
    }
    public   Reservar(Reservar:string):string {
        return Reservar;
    }
    public Entregar(Entregar:string):string {
            return Entregar;
    }
    public agregar_pedido (lector:Lector,Codigo:number):void{
        this.id++;
        let pedido={
            pedido:this.id,
            lector:lector,
            Codigo:Codigo,
            Estado:'Proceso',  
        };
        this.pedido.push(pedido);
    }
   
    public listaPedido():void{
        console.log(this.pedido);
    }
    public buscar_Pedido (nped:Number){
        for (var ped of this.pedido){
            if (ped ['Pedido'] == nped){
                console.log("Pedido : " + ped['Pedido'] + "\n"+ped ['lector'] + "\n"+ "Codigo :"+ped ['Codigo'] 
                + "\n"+ "Estado:"+ped [ 'Estado']+ "\n"+ ped ['pedido']);
                console.log(this.pedido);
            }
        }
    }
    public modificar(nped:number,lector:Lector|any, codigo:number|any,libro:Libro|any ,Estado:string|any){
        this.pedido.forEach((ped,index)=>{
            if (ped ['Pedido'] == nped){ 
                this.pedido[index]['Lector']=lector;
                this.pedido[index]['Codigo']=codigo;
                this.pedido[index]['Libro']=libro;
                this.pedido[index]['Estado']=Estado;
        }
    });
}
    public eliminar (nped:number){
        var idx=0;
        this.pedido.forEach((ped,index)=>{
            if (ped ['Pedido'] == nped){
                    this.pedido[index].pop();
                }
            });
    }
}