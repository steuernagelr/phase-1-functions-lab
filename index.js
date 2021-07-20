// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(blocks) {
    return Math.abs(blocks*264 - 42*264);
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end)* 264
}

function calculatesFarePrice(start, end) {
    if (Math.abs(start - end < 400))
        return 0
    else if (Math.abs(400 < start - end < 2000))
        return .02 * start
    else if (Math.abs(start - end > 2500))
        return "cannot travel that far"
}