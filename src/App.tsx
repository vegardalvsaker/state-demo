import React, {useState} from 'react';
import './App.css';

const personArray: Person[] = [
  {
    firstName: "Jens August",
    lastName: "Olsen",
    email: "jens@cæsar.no"
  },
  {
    firstName: "Ole",
    lastName: "Brum",
    email: "ole@brum.no"
  },
  {
    firstName: "Kaptein",
    lastName: "Sabeltann",
    email: "captain@kjuttaviga.no"
  }
];

const App: React.FC = () => {
  const [persons, setPersons] = useState<Person[]>(personArray);
  const [newFirstName, setNewFirstName] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setNewFirstName(e.target.value)
  }

  const updateLikes = (email: string, likes: number ) => {
    const updatedPersons = persons.map(p => {
      if (p.email === email) {
        const newPerson = {...p, likes: likes} as Person
        return newPerson;
      }
      return p;
    }) as Person[];
    setPersons(updatedPersons);
  }

  return (
    <div>
      {persons.map(p => (
        <div key={p.email}>
          <hr />
          <Person
            person={p}
            onNewLike={likes => {updateLikes(p.email, likes)}}
          />
        </div>
      )
      )}
      <form>
        <input type="text" value={newFirstName} onChange={handleInputChange} />
      </form>
    </div>
  );
}

type Person = {
  firstName: string,
  lastName: string,
  email: string
}

type PersonProps = {
  person: Person
  onNewLike: (likes: number) => void
}

const Person: React.FC<PersonProps> = props => {
  const [likes, setLikes] = useState<number>(0);

  const newLike = () => {
    props.onNewLike(likes+1)
    setLikes(likes+1);
  }
  return (
    <div>
      <h3>First name: {props.person.firstName}</h3>
      <h3>Last name: {props.person.lastName}</h3>
      <h3>email: {props.person.email}</h3>
      <h6>Likes: {likes} </h6> <button onClick={e => {newLike()}}>Like</button>
    </div>
  );
}

export default App;