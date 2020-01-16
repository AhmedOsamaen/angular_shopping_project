import { Ingredient } from './IngredientsModel';
export class Recipe{
    public name:string;
    public description:string;
    public imgUrl:string;
    public ingredients:Ingredient[]

    constructor(name:string ,desc:string, imageUrl:string,ingredient:Ingredient[]){
        this.name=name;
        this.description=desc;
        this.imgUrl=imageUrl;
        this.ingredients=ingredient;
    }

}