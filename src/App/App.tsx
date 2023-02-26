import ThemeProvider from '../context';
import Todo from '../containers/Todo';

function App() {

  return (
    <ThemeProvider>
      <Todo />
    </ThemeProvider>
  );
}

export default App;
