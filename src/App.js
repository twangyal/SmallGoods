import './App.css';

export default function App() {
  return (
    <div className='flex-container'>
      <Searchbar />
    </div>
    
  );
}

function Searchbar(){
  return(
    <input type='text' placeholder='search...'/>
  )
}
