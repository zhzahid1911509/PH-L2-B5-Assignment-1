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