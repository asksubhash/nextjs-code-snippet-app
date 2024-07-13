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

import{SingleNoteType,DarkModeType,SideBarMenu} from "@/app/Types";
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

  selectedNotObject:{
    selectedNote: SingleNoteType | null;
    setSelectedNote: React.Dispatch<React.SetStateAction<SingleNoteType | null>>;
  };
  isNewNoteObject: {
    isNewNote: boolean;
    setIsNewNote: React.Dispatch<React.SetStateAction<boolean>>;
  };
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
  selectedNotObject: {
    selectedNote: null,
    setSelectedNote: () => {},
  },
  isNewNoteObject: {
    isNewNote: false,
    setIsNewNote: () => {},
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
  const [openContentNote, setOpenContentNote] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [allNotes, setAllNotes] = useState<SingleNoteType[]>([]);
  const [selectedNote, setSelectedNote] = useState<SingleNoteType | null>(null);
  const [isNewNote, setIsNewNote] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 600);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function updateAllNotes() {
      const allNotes = [
        {
          id: "1",
          title: "Sample Note",
          isFavorite: false,
          tags: ["JavaScript", "React"],
          description: "This is a sample note.",
          code: `import React from 'react'; 
      const App = () => {\n  return (\n    <div>Hello World!</div>\n  );\n};`,
          language: "javascript",
          creationDate: new Date().toISOString(),
        },
        {
          id: "2",
          title: "This is a note",
          isFavorite: true,
          tags: ["Tag1", "Tag2"],
          description: "This is a sample a note.",
          code: `import React from 'react';
      
      function firstNote(){
      return (
        <div>This is a first note.</div>
      );
      export default firstNote;
      }
      `,
          language: "javascript",
          creationDate: "2024-03-01",
        },
        {
          id: "3",
          title: "Sample Note",
          isFavorite: false,
          tags: ["JavaScript", "React"],
          description: "This is a sample note.",
          code: "const App = () => {\n  return (\n    <div>Hello World!</div>\n  );\n};",
          language: "javascript",
          creationDate: new Date().toISOString(),
        },
        {
          id: "4",
          title: "Sample Note",
          isFavorite: false,
          tags: ["JavaScript", "React"],
          description: "This is a sample note.",
          code: "const App = () => {\n  return (\n    <div>Hello World!</div>\n  );\n};",
          language: "javascript",
          creationDate: new Date().toISOString(),
        },
      ];

      setTimeout(() => {
        setAllNotes(allNotes);
      }, 1000);
    }

    updateAllNotes();
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
        selectedNotObject: { selectedNote, setSelectedNote },
        isNewNoteObject: { isNewNote, setIsNewNote },
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
