function longestString(i) {
    // i will be an array.
    // return the longest string in the array

    var longString = "";

    for (var x in i)
    {
        var stringToCheck = i[x]; 
        if( Object.prototype.toString.call( i[x] ) === '[object Array]' )
        {
            stringToCheck = longestString( i[x] );
        }
         
        if (stringToCheck.length > longString.length)
        {
            longString = stringToCheck;
        }
    }
     
    return longString;
}
