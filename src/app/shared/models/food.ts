export class Food{
    id !: number;
    name !: string;
    description!: string;
    price!:number;
    rating!:number;
    imgUrl !:string;
    favourite !: boolean;
    cookTime !: string ;
    origin ?: string[];
}