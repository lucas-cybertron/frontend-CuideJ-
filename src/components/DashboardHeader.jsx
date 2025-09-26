export const DashboardHeader = ({ user }) => {
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold text-dark">Dashboard</h1>
      <p className="text-white">Bem-vindo, {user.name}</p>
    </div>
};
  