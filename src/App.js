import Message from "./components/message"
import Counter from "./components/counter"
import Colors from "./components/colors"
function App() {
  return (
    <div>
      <Message
        message="Hello, World!"
        text="my first react app"
      />
      <Counter />
      <Colors />
    </div>
  );
}

export default App;
