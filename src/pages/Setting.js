import React from 'react';

const Setting = () => {
    return (
        <div className='setting'>
            <h2>User Settings</h2>
            <form>
                <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' name='username' />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>New Password</label>
                    <input type='password' id='password' name='password' />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'> Confirm New Password</label>
                    <input type='password' id='password' name='password' />
                </div>
                <button type='submit'>Save Changes</button>
            </form>
        </div>

    );
}

export default Setting;
