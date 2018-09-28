const RobotCard = ({name, email, id}) => {
  return(
    <div 
    style={
      {textAlign: 'center', 
      backgroundColor: '#9eebcf', 
      borderRadius: '0.5rem', 
      borderWidth: '0.25rem', 
      display: 'inline-block', 
      margin: '0.5rem',
      padding: '1rem',
      boxShadow: '4px 4px 8px 0px rgba( 0, 0, 0, 0.2 )'
      }
      }>
      <img src={`https://robohash.org/${id}/set_set3?size=200x200`} alt="Robot"/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );

}

export default RobotCard;
