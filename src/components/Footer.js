import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>Changes only affect each session</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer
