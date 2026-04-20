import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-slate-900/80 backdrop-blur z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="text-xl font-bold text-cyan-400">Raj</h1>

        <div className="space-x-6">
          {["/", "/about", "/skills", "/projects", "/contact"].map((path, i) => (
            <NavLink
              key={i}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-cyan-400"
              }
            >
              {path === "/" ? "Home" : path.replace("/", "")}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
