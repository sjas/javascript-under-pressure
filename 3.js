function getFileExtension(i) {
    
    // i will be a string, but it may not have a file extension.
    // return the file extension (with no period) if it has one, otherwise false

     return (new RegExp("(\\w*\\.)*\\w*\\.\\w\\w\\w").test(i)) ? i.match("\\w+$") : false;
    
}
