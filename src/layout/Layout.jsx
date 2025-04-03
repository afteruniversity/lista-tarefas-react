// O Layout serve para envolver o conteúdo da página, como um cabeçalho, rodapé, menu, etc.
// O conteúdo da página é passado como children, que é o que está dentro das tags do componente Layout
// Imagine o Layout como divs vazias, e o children é o que você coloca dentro delas

import "./Layout.css"

const Layout = ({ children }) => {
  return (
    <div className="background">
      <div className="container">
        {children}
      </div>
    </div>
  );
}

export default Layout;