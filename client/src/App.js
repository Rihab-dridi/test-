
import "./App.css";
import ContactList from "./views/contactList";

const contactList = [
  { id: 1, name: "rihab", email: "rihab@gmail.com", phone: 216555555 },
  { id: 2, name: "salim", email: "salim@gmail.com", phone: 216834555 },
  { id: 3, name: "fedi", email: "fedi@gmail.com", phone: 2163164555 },
  { id: 4, name: "mahdi", email: "mahdi@gmail.com", phone: 216555315 }
];

function App() {
  return (
    <div className="App">

      <ContactList contactList={contactList} />
    </div>
  );
}

export default App;
