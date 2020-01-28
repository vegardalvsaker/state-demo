import React, {useState} from "react";
import { Person } from "../../models/Person";
import "./styles.scss";

type PersonCardProps = {
    person: Person
    onPersonChange: (person: Person) => void
  }
  
  const PersonCard: React.FC<PersonCardProps> = props => {
    const [likes, setLikes] = useState<number>(props.person.likes);
  
    const handleNewLike = () => {
      const updatedPerson: Person = {...props.person, likes: likes+1};
      props.onPersonChange(updatedPerson);
      setLikes(likes+1);
    }
    return (
      <div className="personCard">
        <h3>First name: {props.person.firstName}</h3>
        <h3>Last name: {props.person.lastName}</h3>
        <h3>email: {props.person.email}</h3>
        <h6>Likes: {likes} </h6> <button onClick={() => {handleNewLike()}}>Like</button>
      </div>
    );
  }

export default PersonCard;