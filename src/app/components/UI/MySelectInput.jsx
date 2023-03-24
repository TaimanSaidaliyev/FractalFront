export const MySelectInput = ({options, defaultValue, value, onChange}) => {
    return (
        <select className='form-control form-control-lg' value={value} onChange={event => onChange(event.target.value)}>
            <option value="">{defaultValue}</option>
            {options && options.map(option => 
                <option key={option.id} value={option.id}>
                    {option.title}
                </option>
            )}
        </select>
    )
}
