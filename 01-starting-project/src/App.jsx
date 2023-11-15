import Concepts from "./Components/Concepts.jsx";
import Header from "./Components/Header.jsx";
import Examples from "./Components/Examples.jsx";

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <Concepts />
                <Examples />
            </main>
        </div>
    );
};

export default App;
