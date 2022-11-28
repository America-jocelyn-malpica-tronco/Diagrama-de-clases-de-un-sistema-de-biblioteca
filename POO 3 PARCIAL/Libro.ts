export class Libro{

    private TituloLibro:string="";
    public TipoLibro:string="";
    public Autor:string="";
    public Editorial:string="";

    constructor (TituloLibro:string,TipoLibro:string, Autor:string,Editorial:string){
        this.TituloLibro=TituloLibro;
        this.TipoLibro=TipoLibro;
        this.Autor=Autor;
        this.Editorial=Editorial;
    }
    toString():string{
        return `TituloLibro: ${this.TituloLibro} | TipoLibro: ${this.TipoLibro} | Autor ${this.Autor} | Editorial : ${this,this.Editorial}`;
    }
    private set_TituloLibro (TituloLibro:string){
        this.TituloLibro=TituloLibro;
    }
    private get_TituloLibro():string{
        return this.TituloLibro;
    }
    public set_TipoLibro (TipoLibro:string){
        this.TipoLibro;
    }
    public get_TipoLibro():string{
        return this.TipoLibro;
    }
    public set_Autor (Autor:string){
        this.Autor;
    }
    public get_Autor():string{
        return this.Autor;
    }
    public set_Editorial (Editorial:string){
        this.Editorial;
    }
    public get_Editorialo():string{
        return this.Editorial;
    }
    public  Reservar(Reservar:string):string {
        return Reservar;
        } 
    private Entregar (Entregar:string):string{
        return Entregar;
    }
}