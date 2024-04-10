import './App.css';



function App() {
  
    const items = [ 
      'item1',
      'item2',
      'item3'  
    ];
    const list = items.map((item) => {
      return <li key={item}>{item}</li>;
    });
  
  return (
    <div className="App">
      <header className="App-header">
        {list}
      </header>
    </div>
  );
}

export default App;
