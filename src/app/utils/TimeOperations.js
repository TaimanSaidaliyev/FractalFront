export const getDiffMinutes = (time1, time2) =>
{
    var newTime1 = new Date(time1)
    var newTime2 = new Date(time2)

    var diff =(newTime1.getTime() - newTime2.getTime()) / 1000;
    diff /= 60;

    return Math.round(diff);
}


export const getConvertedMinutes = (time) => 
{
    var newTime = new Date(time)

    newTime /= 60000

    return Math.round(newTime)
}
