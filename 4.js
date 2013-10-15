function longestString(i) {
    
    // i will be an array.
    // return the longest string in the array
    var str;
    
    for (x in i) {
        var size = 0;
        
        if(typeof i[x] !== "string") {
            continue;
        }
    
        if (i[x].length > size) {
            size = i[x].size;
            str = i[x];
        }
    }
    
    return str;
}
