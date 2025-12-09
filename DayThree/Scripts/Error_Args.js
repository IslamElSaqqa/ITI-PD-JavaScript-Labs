function onlyTwo(a, b) {
    // Explicit Error 
    if (arguments.length !== 2) {
        throw new Error("Function accepts exactly 2 parameters.");
    }
    return a + b; 
}
