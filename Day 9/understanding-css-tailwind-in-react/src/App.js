import './index.css';
import { AddingTailwind } from './AddingTailwind.js'; 

function App() {
    return (
        <div style={{ textAlign: "center", backgroundColor: "black" }}>
            {/* inline css */}
            <h1 style={{ color: "red" }}>my react is working</h1>
            <hr />
            <p>This is my p tag</p>
            <h2>This is my External css styling</h2>
            <AddingTailwind />  {/* Correct usage */}
        </div>
    );
}

export { App };
