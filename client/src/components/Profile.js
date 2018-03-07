import React from 'react';

class Profile extends React.Component {

    test(e, tekst){
        alert(tekst);
        console.log(e.target[0].value);
        e.preventDefault();
    }

    render(){

        return(
            <div>
            <h1>profile</h1>
    
            <form onSubmit={(e) => {e.preventDefault(); alert(e.target[0].value)}}>
                <input type="text" value="moj tekst"/>
                <input type="submit" />
                </form>
                <a href="/auth/logout">Wyloguj sie</a>
            </div>
        )
    }
}

export default Profile;