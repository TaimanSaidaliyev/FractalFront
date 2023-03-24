export const MySelectUserInput = ({options, value, onChange, isMulti}) => {
    return (
        <select className='form-control form-control' value={value} onChange={event => onChange(event.target.value)} multiple={isMulti && 'multiple'}>
            <option></option>
            {options && options.map(option => 
                <option key={option.id} value={option.id}>
                    {option.first_name + ' ' + option.last_name}
                </option>
            )}
        </select>
    )
}
