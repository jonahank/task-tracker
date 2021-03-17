import PropTypes from 'prop-types'


const Button = (props) => {

    return (
        <button onClick={props.onClick} 
        style = {{background: props.color}} 
        className='btn'>{
            props.text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'Error',
}


Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func,

}


export default Button
