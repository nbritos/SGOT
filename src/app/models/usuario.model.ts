export interface Usuario{
	id?: number;
	nombre?: string;
	apellido?:string;
	email?: string;
	password?: string;
	dni?:number;
	rol?: number;
	alta?:Date;
	estado?: number;
	perfil?: string;
	avatar?:string;
}