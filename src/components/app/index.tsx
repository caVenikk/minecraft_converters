import React from "react";
import "./styles.css";
import { ConvertersList } from "@/components/converters-list";

function App() {
    const converters = [
        { id: 1, name: "Converter 1" },
        { id: 2, name: "Converter 2" },
        { id: 3, name: "Converter 3" },
    ];

    return (
        <div className="app">
            <ConvertersList converters={converters} />
        </div>
    );
}

export default App;
