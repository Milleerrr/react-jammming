import logo from './logo.svg';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import TrackList from './components/TrackList/TrackList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
      </header>
      <div className="Search-bar">
        <SearchBar />
      </div>
      <div className="ListsContainer">
        <SearchResults />
        <div>
          <TrackList />
          <button>Add to Spotify</button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
