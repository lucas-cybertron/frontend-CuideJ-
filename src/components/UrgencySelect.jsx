export const UrgencySelect = ({urgency, onChange}) =>{
    return (
        <div>
            <label className="block text-lg font-medium text-dark mb-3">
                Nível De Urgência 
            </label>
            <select
            value={urgency}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-light">
                <option value="Baixa">Baixa - Posso aguardar</option>
                <option value="Média">Média - Prefiro em breve</option>
                <option value="Alta">Alta - Preciso urgentemente</option>
            </select>
            </div>
    )
}