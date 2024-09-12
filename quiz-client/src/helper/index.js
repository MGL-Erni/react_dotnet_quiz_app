// properly format the time displayed in the Quiz timer
// from just seconds to mm:ss
export const getFormattedTime = sec => {
    return Math.floor(sec / 60).toString().padStart(2, '0') 
        + ':' + Math.floor(sec % 60).toString().padStart(2, '0');
}