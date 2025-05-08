function formatString(input: string, toUpper?: boolean): string {
    if(toUpper == false){
        input = input.toLowerCase();
    }
    else{
        input = input.toUpperCase();
    }

    return input;
}