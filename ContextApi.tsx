"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
interface GlobalContextType {
  sideBarMenuObject: {
    sideBarMenu: SideBarMenu[];
    setSideBarMenu: React.Dispatch<React.SetStateAction<SideBarMenu[]>>;
  };
  darkModeObject: {
    darkMode: DarkModeType[];
    setDarkMode: React.Dispatch<React.SetStateAction<DarkModeType[]>>;
  };
  openSideBarObject: {
    openSideBar: boolean;
    setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  };
  openContentNoteObject: {
    openContentNote: boolean;
    setOpenContentNote: React.Dispatch<React.SetStateAction<boolean>>;
  };
  isMobileObject: {
    isMobile: boolean;
    setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
  };

  allNotesObject: {
    allNotes: SingleNoteType[];
    setAllNotes: React.Dispatch<React.SetStateAction<SingleNoteType[]>>;
  };
}

interface SideBarMenu {
  id: number;
  name: string;
  isSelected: boolean;
  icon: React.ReactNode;
}
interface DarkModeType {
  id: number;
  isSelected: boolean;
  icon: React.ReactNode;
}
interface SingleNoteType {
  id: string;
  title:string;
  isFavorite:boolean;
  tags:string[];
  description:string;
  code:string;
  language:string;
  creationDate:string;
}

const ContextProvider = createContext<GlobalContextType>({
  sideBarMenuObject: {
    sideBarMenu: [],
    setSideBarMenu: () => {},
  },
  darkModeObject: {
    darkMode: [],
    setDarkMode: () => {},
  },
  openSideBarObject: {
    openSideBar: false,
    setOpenSideBar: () => {},
  },
  openContentNoteObject: {
    openContentNote: false,
    setOpenContentNote: () => {},
  },
  isMobileObject: {
    isMobile: false,
    setIsMobile: () => {},
  },
  allNotesObject: {
    allNotes: [],
    setAllNotes: () => {},
  },
});

export default function GlobalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [sideBarMenu, setSideBarMenu] = useState<SideBarMenu[]>([
    {
      id: 1,
      name: "All Snippet",
      isSelected: true,
      icon: <BorderAllIcon sx={{ fontSize: 18 }} />,
    },
    {
      id: 2,
      name: "Favorites",
      isSelected: false,
      icon: <FavoriteBorderIcon sx={{ fontSize: 18 }} />,
    },
    {
      id: 3,
      name: "Trash",
      isSelected: false,
      icon: <DeleteOutlineOutlinedIcon sx={{ fontSize: 18 }} />,
    },
    {
      id: 4,
      name: "Log Out",
      isSelected: false,
      icon: <LogoutIcon sx={{ fontSize: 18 }} />,
    },
  ]);

  const [darkMode, setDarkMode] = useState<DarkModeType[]>([
    { id: 1, icon: <LightModeIcon sx={{ fontSize: 18 }} />, isSelected: true },
    { id: 2, icon: <DarkModeIcon sx={{ fontSize: 18 }} />, isSelected: false },
  ]);

  const [openSideBar, setOpenSideBar] = useState(false);
  const [openContentNote, setOpenContentNote] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  const [allNotes, setAllNotes] = useState<SingleNoteType[]>({});

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 600);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <ContextProvider.Provider
      value={{
        sideBarMenuObject: { sideBarMenu, setSideBarMenu },
        darkModeObject: { darkMode, setDarkMode },
        openSideBarObject: { openSideBar, setOpenSideBar },
        openContentNoteObject: { openContentNote, setOpenContentNote },
        isMobileObject: { isMobile, setIsMobile },
        allNotesObject: { allNotes, setAllNotes },
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
}

export const useGlobalContext = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
};
