import './App.css';

export default function App() {
  return (
    <header>
      <SearchBar />
    </header>
    
  );
}
function HomeButton(){

}
function SearchBar(){
  return(
    <input type='text' placeholder='search...'/>
  )
}
