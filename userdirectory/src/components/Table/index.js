import React from 'react';

function Searching(props) {
    return (
        <form>
            <div className='form-group'>
                <label for='sortby'>Search By: </label>
                <input
                    onChange={props.handleInputChange}
                    type='checkbox'
                    name='sortby'
                    id='lastname'
                    checked={(props.sortby === 'lastname') ? 'checked' : false}
                    /> Last name
                <input
                    onChange={props.handleInputChange}
                    type='checkbox'
                    name='sortby'
                    id='firstname'
                    checked={(props.sortby === 'firstname') ? 'checked' : false}
                    /> First Name
            </div>
        </form>
    );
}

export default Searching;