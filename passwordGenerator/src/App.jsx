import PasswordGenerator from "./PasswordGenerator";

function App() {
  return (
    <div className="w-full h-screen mx-auto flex justify-center items-center flex-col bg-slate-800 text-white">
      <h1 className="text-white text-center my-4 text-2xl font-bold ">
        Password Generator 🔒
      </h1>
      <PasswordGenerator />
    </div>
  );
}

export default App;
