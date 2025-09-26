//componente responsavel por emitir notificações utilizando a biblioteca react-hot-tost
import { AuthProvider } from "./context/AuthContext";
//importação do arquivo authProvider responsavel pela autemticação de usuarios e controle de rotas privadas 

//importação do appRoutes componente de gerenciamento de rotas 
import { AppRoutes } from "./routes/appRoutes";

//contrução do código principal 
function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}
export default App;