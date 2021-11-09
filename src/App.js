import './App.css';

function App() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div>
        <div className="text-xl font-medium text-primary">ChitChat</div>
        <p className="text-blue-450">You have a new message!</p>
        <TailwindButton/>
      </div>
    </div>
  );
}

function TailwindButton(){
  return (
    <button className="bg-blue-500
    text-white 
    font-medium
    px-4 py-2
    rounded-md
    hover:bg-blue-600
    ">Testing Button</button>
  )
}

export default App;
