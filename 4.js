function longestString(i) 
{    
    // i will be an array.
    // return the longest string in the array
    var longString = "";
    for (j = 0; j < i.length; j++)
    {
        var stringToCheck = i[j]; 
        if( Object.prototype.toString.call( i[j] ) === '[object Array]' )
        {
            var loopNum = j;
            stringToCheck = longestString( i[j] ); 
            j = loopNum; 
        }
         
        if (stringToCheck.length > longString.length)
        {
            longString = stringToCheck;
        }
    }
     
    return longString;
}
