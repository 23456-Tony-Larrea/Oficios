<<<<<<< HEAD

export class Oficios {
    fecha:string;
    lugar:string;
    numeroOficio:string;
    destinatario:string;
    asunto:string;
    cuerpo:string;
    despedida:string;
    firma:string;
    ordenDelDia:Ordenado[]=[];
    constructor(){
        this.ordenDelDia.push( new Ordenado())
    }
}
export class Ordenado{
    catalogo:string;
}
=======
export class Oficios {
fecha:Date;
lugar:string;
numeroOficio:string;
destinatario:string;
asunto:string;
cuerpo:string;
despedida:string;
firma:string;

}
>>>>>>> origin/master
