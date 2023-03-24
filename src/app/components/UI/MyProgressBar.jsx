export const MyProgressBar = (props) => {
    return (
        <div className='d-flex flex-column w-100 me-2'>
            <div className='progress h-6px w-100'>
                <div
                    className={`progress-bar bg-primary ${props.value > 0 && props.value < 30 ? 'bg-danger' : props.value >= 30 && props.value < 75 ? 'bg-warning' : props.value === 100 ? 'bg-success' : 'bg-primary'}`}
                    role='progressbar'
                    style={{width: props.value + '%'}}
                ></div>
            </div>
        </div>
    )
}
