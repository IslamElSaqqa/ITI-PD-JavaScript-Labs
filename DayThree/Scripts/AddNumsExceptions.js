function addNumbers(...nums) {
    if (nums.length === 0) {
        throw new Error("You must pass at least one number.");
    }

    if (!nums.every(n => typeof n === "number")) {
        throw new Error("All parameters must be numbers.");
    }

    return nums.reduce((sum, n) => sum + n);
}
