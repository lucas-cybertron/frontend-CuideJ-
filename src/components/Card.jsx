export const Card = ({children, className = '',...props }) => {
    return(
        <div className={`rounded-2xl shadow-lg p-6 bg-[#88C1D3]/30 ${className}`}
        {...props}
        >
        {children}
        </div>
    )
}