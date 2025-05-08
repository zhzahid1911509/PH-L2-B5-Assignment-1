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

//

function processValue(value: string | number): number{
    if(typeof value == "string"){
        return value.length;
    }
    else{
        return value*2;
    }
}

//

interface Product {
    name: string;
    price: number;
}
  
function getMostExpensiveProduct(products: Product[]): Product | null {
    if(products.length == 0){
        return null;
    }

    let productWithHighestPrice = products[0];

    for(let i=0; i<products.length; i++){
        if(products[i].price > productWithHighestPrice.price){
        productWithHighestPrice = products[i];
        }
    }

    return productWithHighestPrice;
}

//

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
function getDayType(day: Day): string{
    switch(day){
        case Day.Saturday:
        case Day.Sunday:
            return "Weekend";
        default:
            return "Weekday";
    }
  }

  //
  
async function squareAsync(n: number): Promise<number>{
    const outputPromise = new Promise<number>((resolve, reject) => {
        setTimeout(()=>{
            if(n < 0){
                reject(new Error("Negative number not allowed"));
            }
            else{
                resolve(n*n);
            }
        }, 1000);
    });

    return outputPromise;
}