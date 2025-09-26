export const RequestDescription = ({ description, onChange }) => {
  return (
    <div>
        <label className="block text-lg font-medium text-dark mb-3">
            escreva sua necessidade
        </label>
        <textarea
        value={description}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-light"
        rows={4}
        placeholder="ex: Gostaria de ser seu paciente. preciso de ajuda com ansiedade..."
        required
        />
    </div>
  );
};