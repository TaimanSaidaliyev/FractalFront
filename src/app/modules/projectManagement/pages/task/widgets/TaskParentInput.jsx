export const TaskParentInput = ({options, defaultValue, value, onChange}) => {
    return (
        <select className='form-control form-control-lg' value={value} onChange={event => onChange(event.target.value)}>
            <option value="">{defaultValue}</option>
            {options && options.map((option) => 
                <option key={option.id} value={option.id}>
                    {hierarchy_level(option.level) + ' ' + option.title}
                </option>
            )}
        </select>
    )
}


const hierarchy_level = (len = 0) => {
    let symbol = ''
    for (let index = 0; index < len; index ++) {
        symbol = symbol + '-'
    }

    return symbol
}