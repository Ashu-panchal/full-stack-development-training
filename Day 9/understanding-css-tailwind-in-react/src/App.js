import './index.css';
import { AddingTailwind } from './AddingTailwind.js'; 
import {RenderList} from './Renderlist.js'

function App() {
    return (
        <div>
            {/* inline css */}
            <h1 style={{ color: "red" }}>my react is working</h1>
            <hr />
            <p>This is my p tag</p>
            <h2>This is my External css styling</h2>
            <AddingTailwind />  {/* Correct usage */}
            <RenderList />
        </div>
    );
}

export { App };
