// import React from 'react' not neaded
import PropTypes from 'prop-types'
import Button from './Button'


const Header = (props) => {
	const onClick = () => {
		console.log('Click!');
	}

	return (
    <header className='header'>
      <h1>{props.title}</h1>
			<Button 
			color='green' 
			text={props.toggleOn ? 'Minimize' : 'Add'}
			onClick= {props.showToggle}/>
    </header>
    )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

/* const headingStyle = {
	color: 'red',
	background: 'black',
} */

export default Header
