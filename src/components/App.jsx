<<<<<<< HEAD
import './App.module.css';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import SearchBox from './searchBox/SearchBox';
=======
import './App.module.css'
import ContactForm from './contactForm/ContactForm'
import ContactList from "./contactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
>>>>>>> 9ffa3ea8b3bc68b99b83c5359e1a6af6d8e1c51a
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOps';
import {
  selectContact,
  selectIsError,
  selectIsLoading,
} from '../redux/contactsSlice';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      {isError && <p>Not founs</p>}
      {isLoading && <p>Loading...</p>}

      {contacts.length > 0 && <SearchBox />}
      {contacts.length > 0 && <ContactList />}
    </>
  );
}
