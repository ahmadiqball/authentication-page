import classes from './ProfileForm.module.css';
import { useRef, useContext } from 'react';
import { AuthContext } from '../../store/auth-context';
import { useHistory } from 'react-router-dom';

const ProfileForm = () => {
  const history = useHistory();
  const newPassRef = useRef();
  const AuthCtx = useContext(AuthContext);

  const changePassword = (event) => {
    event.preventDefault();
    const newPassword = newPassRef.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAj9TFAmUSs3qxZVi7U6aTZdKPqMR5t8rI', {
      method: 'POST',
      body: JSON.stringify({
        idToken: AuthCtx.token,
        password: newPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(() => {
      history.replace('/')
    })
  }

  return (
    <form className={classes.form} onSubmit={changePassword}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPassRef}/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
