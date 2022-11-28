export class Revista {

    private TituloRevista: string="";
    public  TipoRevis:string="";
    private Autor:string="";
    public  Edicion:number=0;

    constructor (TituloRevista:string,TipoRevis:string, Autor:string, Edicion:number){
        this.TituloRevista=TituloRevista;
        this.TipoRevis=TipoRevis;
        this.Autor=Autor;
        this.Edicion=Edicion;
    }

    private set_TituloRevista (TituloRevista:string){
        this.TituloRevista=TituloRevista;
    }
    private get_TituloRevista():string{
        return this.TituloRevista;
    }
    public set_TipoRevis(TipoRevis:string){
        this.TipoRevis=TipoRevis;
    }
    public get_TipoRevisa():string{
        return this.TipoRevis;
    }
    private set_Autor(Autor:string){
        this.Autor=Autor;
    }
    private get_Autor():string{
        return this.Autor;
    }
    public set_Edicion(Edicion:number){
        this.Edicion=Edicion;
    }
    public get_Edicion():number{
        return this.Edicion;
    }
    public  Reservar(Reservar:string):string {
        return Reservar;
        } 
    public Entregar (Entregar:string):string{
        return Entregar;
    }
}