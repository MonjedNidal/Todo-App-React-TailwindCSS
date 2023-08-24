import MoonIcon from "../images/icon-moon.svg";
import SunIcon from "../images/icon-sun.svg";
function Header({ handleThemeSwitch, isDarkTheme }) {
  return (
    <div className="flex justify-between ">
      <h1 className="text-4xl font-bold  text-white tracking-widest">TODO</h1>
      <div
        onClick={() => {
          handleThemeSwitch();
        }}
      >
        {isDarkTheme ? (
          <img className="h-6 hover:cursor-pointer" src={SunIcon} alt="" />
        ) : (
          <img className="h-6 hover:cursor-pointer" src={MoonIcon} alt="" />
        )}
      </div>
    </div>
  );
}

export default Header;
