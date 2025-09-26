export const KpiCard = ({ icon: Icon, value, label, color }) => {
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <Icon className={`w-8 h-8 ${color} mx-auto mb-2`} />
      <h3 className="text-2xl font-bold text-dark">{value}</h3>
      <p className="text-dark/70">{label}</p>
    </div>
};
  