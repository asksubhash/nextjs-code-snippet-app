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