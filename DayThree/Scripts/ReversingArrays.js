function reverseArgs1() {
    return Array.from(arguments).reverse();
}

function reverseArgs2(...args) {
    return args.reverse();
}
