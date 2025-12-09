function reverseArgs1() {
    return Array.from(arguments).reverse();
}

function reverseArgs2() {
    return Array.prototype.slice.call(arguments).reverse();

}