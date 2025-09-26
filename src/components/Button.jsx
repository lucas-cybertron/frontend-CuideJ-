// Componente de botão reutilizável
export const Button = ({
    children, // Conteúdo interno do botão (texto ou ícones)
    variant = 'primary', // Define o estilo visual (padrão: primary)
    size = 'md', // Define o tamanho do botão (padrão: md)
    loading = false, // Indica se o botão está em estado de carregamento
    className = '', // Permite adicionar classes extras personalizadas
    ...props // Captura outras props (ex: onClick, type, etc.)
  }) => {
    // Classes base aplicadas em todos os botões
    const baseClasses = 'font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
   
    // Estilos de acordo com o tipo de botão
    const variants = {
      primary: 'bg-dark  text-white hover:bg-accent focus:ring-light', // Botão principal
      secondary: 'bg-white border border-light text-gray hover:bg-accent hover:border-accent focus:ring-light', // Botão secundário
      customise:'bg-white text-dark w-90 mt-5',
      login:'bg-dark text-white p-auto',
      solicitacao:'bg-bg-[#88C1D3]/30 border border-dark hover:bg-white '

    };
   
    // Tamanhos disponíveis para o botão
    const sizes = {
      sm: 'px-3 py-1.5 text-sm', // Pequeno
      md: 'px-4 py-2 text-base', // Médio (padrão)
      lg: 'px-6 py-3 text-lg', // Grande
      custon: 'px-4 py-2 text-2xl '
    };
   
    return (
      <button
        // Montagem final das classes CSS dinamicamente com base nas props
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={loading} // Desabilita o botão quando está carregando
        {...props} // Permite passar outras propriedades (ex: onClick, type)
      >
        {/* Renderiza "Carregando..." caso esteja em loading, senão mostra o conteúdo */}
        {loading ? 'Carregando...' : children}
      </button>
    );
  };
   