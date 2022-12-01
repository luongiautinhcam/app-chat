import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Contacts from "./components/Contacts";
import Chats from "./components/Chats";

function App() {
  return (
    <div className="App">
      {/* Navbar*/}
      <Navbar />
      {/* Search*/}
      <Search />
      <div className="flex">
        {/* Contacts*/}
        <Contacts />
        {/* Chats*/}
        <Chats />
      </div>
    </div>
  );
}

export default App;
