import './App.css';

function App() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="container">
        <div className="text-xl font-medium text-primary">ChitChat</div>
        <p className="text-blue-450">You have a new message!</p>
        <TailwindButton>
          TailwindCSS
        </TailwindButton>
      </div>
      <div className="flex-initial content-center justify-center mx-2">
        <div className="bg-red-600  px-4 py-2 rounded border-4 mx-4 border-blue-450">hello</div>
        <div>hello</div>
      </div>
    </div>
  );
}

function TailwindButton(props){
  return (
    <button className="bg-blue-500
    text-white 
    font-medium
    px-4 py-2
    rounded-md
    hover:bg-blue-600
    ">{props.children}</button>
  )
}

export default App;
