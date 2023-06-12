export interface Usuario{
	id?: number;
	nombre?: string;
	email?: string;
	password?: string;
	rol?: number;
	alta?:Date;
	activado?: string;
	perfil?: string;
	avatar?:string;
}