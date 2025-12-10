export default function TarjetaHabilidades({ title, children, className }) {
  return (
    <div className={`border-2 border-[#395E66] p-6 rounded-xl shadow-sm ${className}`}>
      <h3 className="mb-4 text-[#395E66]">{title}</h3>
      <div className="flex flex-wrap gap-4 items-center justify-center text-center">
        {children}
      </div>
    </div>
  );
}
