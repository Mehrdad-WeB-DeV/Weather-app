import logo from '../../assets/CODEMEHRDADLOGO.png'
import logoD from '../../assets/LOGOCODEMEHRDAD-BLACK.png'
type Props = {
  dark: boolean;
  setDark: (v: boolean) => void;
};

export default function Header({ dark, setDark }: Props) {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 backdrop-blur-md bg-zinc-400 dark:bg-black/30 border-b border-gray-200 dark:border-gray-700">
      
      {/* Logo + Name */}
      <div className="flex items-center gap-3">
        <img
          src={dark ? logo : logoD}
          alt="logo"
          className="w-12 h-10 "
        />
        <div className="flex flex-col">
          <span className="font-bold text-lg text-gray-800 dark:text-white">
           CodeMehrdad
          </span>
          <span className="text-xs text-gray-500">
            Weather Dashboard
          </span>
        </div>
      </div>

      {/* Dark Mode Button */}
      <button
        onClick={() => setDark(!dark)}
        className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-800 text-sm"
      >
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>
    </header>
  );
}