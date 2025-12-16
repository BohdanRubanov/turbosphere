export interface IProduct {
	name: string;
	id: number;
	price: number;
	image: string;
	description: string | null;
	categoryId: number;
}
