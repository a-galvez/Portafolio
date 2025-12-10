export default function IconoHabilidad({ src, alt, label }) {
  return (
    <div className="flex flex-col items-center px-2">
      <img src={src} alt={alt} className="h-[40px] w-auto " />
      <span className="text-center text-sm">{label}</span>
    </div>
  );
}
