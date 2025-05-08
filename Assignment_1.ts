function formatString(input: string, toUpper?: boolean): string {
    if(toUpper == false){
        input = input.toLowerCase();
    }
    else{
        input = input.toUpperCase();
    }

    return input;
}

//

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
    const filteredItems: {
        title: string;
        rating: number;
    }[] = [];

    for( let i = 0; i<items.length; i++ ){
        if(items[i].rating >= 4){
            filteredItems.push(items[i]);
        }
    }

    return filteredItems;
}

//

function concatenateArrays<T>(...arrays: T[][]): T[]{
    const concatenatedArray: T[] = [];

    for(let i = 0; i<arrays.length; i++){
        const insideArray = arrays[i];

        for(let j = 0; j<insideArray.length; j++){
            concatenatedArray.push(insideArray[j]);
        }
    }

    return concatenatedArray;
}

//

class Vehicle {
    private make: string;
    private year: number;

    public constructor(make:string, year: number){
        this.make = make;
        this.year = year;
    }

    public getInfo():string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    private model: string;

    public constructor(make:string, year: number, model:string){
        super(make, year);
        this.model = model;
    }

    public getModel(){
        return `Model: ${this.model}`;
    }
}
