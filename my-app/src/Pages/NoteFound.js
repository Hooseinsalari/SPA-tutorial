import React from 'react';
import { Link } from 'react-router-dom';

const NoteFound = () => {
    return (
        <div>
            <h2>Page note found 404!</h2>
            <Link to="/">go to home page</Link>
        </div>
    );
};

export default NoteFound;