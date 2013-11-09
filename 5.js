function arraySum(i) {
    
    // i will be an array, containing integers, strings and/or arrays like itself.
    // Sum all the integers you find, anywhere in the nest of arrays.

    return i.reduce(
        function(total, i)
        {
            if (typeof i == 'number') 
            {
                return total + i;
            } 
            else if (i.reduce) 
            {
                return total + arraySum(i);
            }
            return total;
        }, 0);
    
}
