import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cliente from "./pages/Cliente";
import AddCliente from "./pages/AddCliente";
import EditCliente from "./pages/EditCliente";
import ViewCliente from "./pages/ViewCliente";
import ViewProducts from "./pages/ViewProducts"
import NoMatch from "./pages/NoMatch";
import ContaCliente from "./pages/ContaCliente";
import InfoCliente from "./pages/InfoCliente";
import GlobalStyle from "./styles/global";
function App() {
  return (
    <>
      <GlobalStyle/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="cliente" element={<Cliente />}>
          <Route index element={<AddCliente />} />
          <Route path="edit/:id" element={<EditCliente />} />
          <Route path="info/:id" element={<InfoCliente />} />
          <Route path="view" element={<ViewCliente />} />
        </Route>
        <Route path="search" element={<ViewProducts/>}/>
        <Route path="account" element={<ContaCliente/>}/>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}
export default App;
