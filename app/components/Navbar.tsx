export default function Navbar() {
  return (
    <nav className="px-20 py-2 text-white bg-stone-800 flex justify-between items-center">
      <div>
        <h1 className="text-2xl">LOGO</h1>
        <h2>Albujar Rafaile & Asociados</h2>
      </div>
      <ul className="flex text-sm uppercase gap-4 cursor-pointer">
        <li>inicio</li>
        <li>quienes somos</li>
        <li>clientes</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
}
