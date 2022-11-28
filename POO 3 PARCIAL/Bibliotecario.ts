export class Bibliotecario{

    private IDpersonal =0;
    private bibliotecario:any =[]=[];
    
    constructor (IDpersonal:number){
        this.IDpersonal=IDpersonal;
    }
     public set_IDpersonal(IDpersonal:number){
        this.IDpersonal = IDpersonal;
     }
    public get_IDpersonal ():number{
        return this.IDpersonal;
    }
    public Reservar (Reservar:string):string{
        return Reservar;
    }
    public Entregar (Entregar:string):string{
        return Entregar;
    }

}