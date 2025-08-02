import { Header } from './Header.js';
import { ToDoList } from './TodoList.js';
import { PendingList } from './PendingList.js';

function App() {
    return (
        <div>
            <Header />
            <ToDoList />
            <PendingList />
        </div>
       )
};
export { App };