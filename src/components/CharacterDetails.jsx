const CharacterDetails = ({ match }) => {
    const { id } = match.params; 
    return (
      <div>
        <h2>Character Details</h2>
        <p>Details for Character ID: {id}</p>
      </div>
    );
  };
  
  export default CharacterDetails;