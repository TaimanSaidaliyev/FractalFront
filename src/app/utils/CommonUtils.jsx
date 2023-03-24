export function readingTime (text) {
    var words = 215*7.2
    return Math.ceil(text.length/words)
}
