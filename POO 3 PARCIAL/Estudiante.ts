import { Lector } from "./Lector";

export class Estudiante {

    private Codigodelestudiante:number=0;
    
    constructor (Codigodelestudiante:number){

        this.Codigodelestudiante =Codigodelestudiante;
    }
    public set_Codigodelestudiante(Codigodelestudiante:number){
        this.Codigodelestudiante = Codigodelestudiante;
   }
    public get_Codigodelestudiante():number{
       return this.Codigodelestudiante;
   }
    public  Reservar(Reservar:string):string {
        return Reservar;
        }
    public Entregar(Entregar:string):string{
        return Entregar;
    }
}
