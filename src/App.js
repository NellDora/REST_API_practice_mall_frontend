const { RouterProvider } = require("react-router-dom");
const { default: root } = require("./router/root");


function App() {
  return (
    <RouterProvider router={root}/>
  );
}

export default App;
