import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (

        <footer id="contact">
            <div>
                <a href="mailto:russ_tracy@comcast.net">
                    <FontAwesomeIcon icon={["fas", "envelope-square"]} size="3x" color="#607d8b" />
                </a>
            </div>
            <div>
                <a href="https://github.com/RussTracy" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={["fab", "git-square"]} size="3x" color="#607d8b" />
                </a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/russtracy" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" color="#607d8b" />
                </a>
            </div>
            <div>
                <a href="https://stackoverflow.com/users/14402649/russ" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={["fab", "stack-overflow"]} size="3x" color="#607d8b" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;