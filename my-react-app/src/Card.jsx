import profilePicture from './assets/user.png';
import Button from './Button/Button.jsx';
import PropTypes from 'prop-types';
function Card(props){
    return(
        <div className="card">
            <img className="card-image" src={profilePicture} alt="profile picture" />
            <h2 className='card-title'>{props.name}</h2>
            <p className="card-text">{props.about} </p>
            <p>Status : {props.status ? "Active":"Not Active"}</p>
            <Button/>
        </div>
    );

}
Card.propTypes={
    name: PropTypes.string,
    about: PropTypes.string,
    status: PropTypes.bool

}
Card.defaultProps = {
    name: 'card',
    about: 'card',
    status:true
}
export default Card