export interface Order{
    id?:number;
    title?:string;
    description?:string;
    assignedTo?:string; //acá puede ir el id de usuario
    status?:string; // acá podría ir booleano. Hablar en el grupo
}