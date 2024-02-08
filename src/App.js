import './App.css';

export default function App() {
  return (
    <header>
      <HomeButton/>
      <SearchBar />
    </header>
    
  );
}
function HomeButton(){
  return(
    <button>Home</button>
  );
}
function SearchBar(){
  return(
    <input type='text' placeholder='search...'/>
  )
}
