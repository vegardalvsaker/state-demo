import React, {useState} from 'react';
import {Person} from "../../models/Person";
import NewPersonForm from "../NewPersonForm";
import PersonCard from "../PersonCard";
import './App.css';

const personArray: Person[] = [
  {
    firstName: "Jens August",
    lastName: "Olsen",
    email: "jens@cæsar.no",
    likes: 0
  },
  {
    firstName: "Ole",
    lastName: "Brum",
    email: "ole@brum.no",
    likes: 0
  },
  {
    firstName: "Kaptein",
    lastName: "Sabeltann",
    email: "captain@kjuttaviga.no",
    likes: 0
  }
];

const App: React.FC = () => {
    const [persons, setPersons] = useState<Person[]>(personArray);

    const handlePersonChange = (newPerson: Person) => {
        const updatedPersons = persons.map(p => {
            return p.email === newPerson.email ? newPerson : p
        });
        setPersons(updatedPersons);
    };

    const handleNewPerson = (newPerson: Person) => {
        
        setPersons([...persons, newPerson]);
    }
  return (
    <div>
      {persons.map(p => (
        <div key={p.email}>
          <hr />
          <PersonCard
            person={p}
            onPersonChange={handlePersonChange}
          />
        </div>
      )
      )}
      <NewPersonForm onNewPerson={handleNewPerson}/>
      <div><p>This is a long ass paragraph <br/> with breaks and stuff. It is interseting
    </p></div>
    </div>
  );
}

export default App;