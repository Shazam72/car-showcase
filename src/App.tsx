import Canvas from "./components/Canvas";
import CarContextProvider from "./components/TweakContextProvider";

function App() {
  return (
    <div className="w-screen h-screen p-0 m-0">
      <CarContextProvider>
        <Canvas />
      </CarContextProvider>
    </div>
  );
}

export default App;
