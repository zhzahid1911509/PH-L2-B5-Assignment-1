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