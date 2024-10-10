import "./styles.css";
import { ConvertersList } from "@/components/converters-list";
import { converters } from "@/data";

function App() {
    return (
        <div className="app">
            <ConvertersList converters={converters} />
        </div>
    );
}

export default App;
