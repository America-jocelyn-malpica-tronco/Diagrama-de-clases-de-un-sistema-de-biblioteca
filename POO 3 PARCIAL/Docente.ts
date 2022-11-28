export class  Docente {

    private CodigoDocente:number=0;

    constructor (CodigoDocente:number){

        this.CodigoDocente=CodigoDocente;
    }
    private set_CodigoDocente (CodigoDocente:number){
        this.CodigoDocente=CodigoDocente;
    }
    private get_CodigoDocente():number{
        return this.CodigoDocente;
    }
    public  Reservar(Reservar:number):number {
        return Reservar;
        } 
    private Entregar (Entregar:number):number{
        return Entregar;
    }
}