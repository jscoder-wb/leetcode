var stableMountains = function (height, threshold) {
    const stableMountains = [];
    for (let i = 1; i < height.length; i++) {
        if (height[i - 1] > threshold) {
            stableMountains.push(i);
        }
    }
    return stableMountains;
};