// O Layout serve para envolver o conteúdo da página, como um cabeçalho, rodapé, menu, etc.
// O conteúdo da página é passado como children, que é o que está dentro das tags do componente LayoutTeste
// Imagine o Layout como divs vazias, e o children é o que você coloca dentro delas
import "./LayoutTeste.css"

const LayoutTeste = ({ children }) => {
  return (
    <div className="main-layout">
      {children}
    </div>
  );
}

export default LayoutTeste;