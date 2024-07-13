import { UserButton } from "@clerk/nextjs";
import Logo from "./Logo";
import { useGlobalContext } from "@/ContextApi";
import SearchIcon from "@mui/icons-material/Search";
import DarkMode from "@/app/components/dashboard/DarkMode";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

function HeaderLayout() {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 ">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <a href="/dashboard" className="flex ms-2 md:me-24">
                <Logo/>
              </a>

              <div>
                <SearchBar />
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div className="flex text-sm  rounded-full focus:ring-4 focus:ring-gray-300 ">
                 <UserButton/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}


export default HeaderLayout;

function SearchBar() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <>
      <div className={`${darkMode[1].isSelected ? "bg-slate-700" : "bg-slate-100"} relative pl-3 w-[60%] h-[38px] rounded-3xl flex items-center gap-2 `}>
        <SearchIcon className="text-purple-500" sx={{ fontSize: 13 }} />
        <input
          placeholder="Search a Snippet..."
          className={`${darkMode[1].isSelected ? "bg-slate-700" : "bg-slate-100"} w-[70%]  rounded-md border-0 focus:border-0  focus:outline-none focus:shadow-none outline-none text-sm bg-slate-100 text-slate-500`}
          type="text"
        />

        {/* <div className={`absolute flex gap-1 px-3 rounded-3xl max-md:px-1 bg-main p-1 text-[13px] text-white top-[6px] right-[6px] items-center cursor-pointer select-none`}>
         <AddOutlinedIcon sx={{fontSize:18}}/>
          <div className="max-md:hidden">Snippet</div>
        </div> */}
      </div>
    </>
  );
}