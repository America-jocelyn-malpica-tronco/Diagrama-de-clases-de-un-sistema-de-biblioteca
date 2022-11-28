export class Lector  {

    private Nombre: string = "";
    private Direccion : string = "";
    private Telefono : number = 0;

    toString():string{
        return `Nombre: ${this.Nombre} | Direccion: ${this.Direccion} | Telefono ${this.Telefono}` ;
    }
    
    constructor (Nombre:string, Direccion:string, Telefono:number){
        this.Nombre = Nombre;
        this.Direccion = Direccion;
        this.Telefono =Telefono;
    }
    public set_Nombre(Nombre:string){
        this.Nombre = Nombre;
    }
    public get_Nombre ():string{
        return this.Nombre;
    }
    public set_Direccion(Direccion:string){
        this.Direccion = Direccion;
    }
    public get_Direccion ():string{
        return this.Direccion;
    }
    public set_Telefono(Telefono:number){
        this.Telefono = Telefono;
    }
    public get_Telefono():number {
        return this.Telefono;
    }
    //Metodos
    
    public  reservar(reservar:string):string {
    return reservar;
    }
    public entregar(entregar:string):string {
        return entregar;
    }
    }