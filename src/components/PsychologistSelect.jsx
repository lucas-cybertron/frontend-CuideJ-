

export const PsychologistSelect = ({ psychologists, selected, onChange }) => {
    return (
        <div>
            <label className="flex items-center gap-2 text-lg font-medium text-dark mb-3">
               
                Escolha o Psicologo
            </label>
            <select
            value={ selected}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-light "
            required
            >
                <option value="">Selecione um psicólogo</option>
                {psychologists.map(psych => (
                    <option key={psych.id} value={psych.id}>
                        {psych.name} - {psych.specialty}
                    </option>
                ))}

            </select>
        </div>
    )
}