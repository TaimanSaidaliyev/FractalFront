const localeDate = 'ru-RU'

export const ConvertDateAndTime = (timestamp) => {
    const date = new Date(timestamp);

    const formattedDate = date.toLocaleDateString(localeDate, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const formattedTime = date.toLocaleTimeString(localeDate, {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric'
    });

    const formattedDateTime = `${formattedDate} в ${formattedTime}`;

    return (
        formattedDateTime
    )
}


export const ConvertDate = (timestamp, type='long') => {
    const date = new Date(timestamp);
    let formattedDate = ''
    if(type==='long')
    {
        formattedDate = date.toLocaleDateString(localeDate, {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    }
    else if (type==='ddmmyyyy')
    {
        formattedDate = date.toLocaleDateString(localeDate, {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric'
        });
    }
    

    return (
        formattedDate
    )
}