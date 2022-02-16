import Contact from "./contact";
import AddContact from "./addContact";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { getAllHandler } from "../redux/actions/contact-action";

export default function ContactList({ contactList }) {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/contacts/")
      .then((res) => dispatch(getAllHandler(res.data)))
      .then((err) => console.error(err));
  }, []);
  // useEffect(() => {
  //   dispatch(getAllHandler());
  // }, []);
  return (
    <div>
      <h1> Contact List</h1>
      <AddContact />
      <div className="contactListContainer">
        {contactList.map((el, key) => (
          <Contact el={el} key={el.id} />
        ))}
      </div>
    </div>
  );
}
