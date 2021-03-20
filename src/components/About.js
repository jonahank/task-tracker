import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <p><i>Last changes made in March</i></p>
            <br/>
            <p>Big credits to Traversy Media: &nbsp;
                <a href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA"
                    rel='noreferrer'
                    target='_blank'
                    >
                    Check out his channel!
                </a>

            </p>
            <br/> <br/> <br/> <br/> <br/>
            <Link className='btn' style={{background:'grey'}} to="/">Go Back</Link>
        </div> // we could use <a> tags, but then the page loads.
    )
}

export default About
