import React, {useState} from "react";
import { Person } from "../../models/Person";

type NewPersonFormProps = {
    onNewPerson: (person: Person) => void
}

const NewPersonForm: React.FC<NewPersonFormProps> = props => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    
    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    }
    
    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    }
    
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const handleSubmitNewPerson = (e: React.FormEvent<HTMLFormElement>) => {
        //the function call below stops the webpage from refreshing when the form is submitted
        e.preventDefault();
        const newPerson: Person = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            likes: 0,
        };
        props.onNewPerson(newPerson);
        
        
    }

    return (
        <form onSubmit={(e) => {handleSubmitNewPerson(e)}}>
            <input type="text" value={firstName} onChange={handleFirstNameChange} />
            <input type="text" value={lastName} onChange={handleLastNameChange} />
            <input type="text" value={email} onChange={handleEmailChange} />
            <input type="submit" value="submit" />
        </form>
        );

}

export default NewPersonForm;