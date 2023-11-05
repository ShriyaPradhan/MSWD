import React from 'react';

function Sai() {
    return (
        <div>
            <label htmlFor="username">Username:</label>
            <br />
            <input type="text" id="username" name="username" />
            <br /><br />
            <label htmlFor="password">Password:</label>
            <br />
            <input type="password" id="password" name="password" />
        </div>
    );
}

export default Sai;