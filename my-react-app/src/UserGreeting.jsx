function UserGreeting(props){
    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username}</h2>
    // }
    // return <h2>Please log in to continue</h2>
  
return (
    props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username} </h2>: <h2 className="login-message">Please Log in to continue</h2>
)

}
export default UserGreeting