import './App.css';

export default function App() {
  return (
    <header>
      <NavButton name={'Home'}/>
      <NavButton name={'Menu'}/>
      <SearchBar />
      <NavButton name={'Catering'}/>
      <NavButton name={'About'}/>
    </header>
    
  );
}
function NavButton({name}){
  return(
    <button>{name}</button>
  );
}
function SearchBar(){
  return(
    <input type='text' placeholder='search...'/>
  )
}
