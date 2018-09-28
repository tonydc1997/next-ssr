const robotCard = ({name, email, id}) => {
  return(
    <div className=' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${robot.id}/set_set3?size=200x200`} alt="Robot"/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );

}

export default robotCard;
