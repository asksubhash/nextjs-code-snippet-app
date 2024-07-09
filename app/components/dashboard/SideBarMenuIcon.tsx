import { useGlobalContext } from '@/ContextApi';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export default function SideBarMenuIcon() {
  const {
    openSideBarObject: { openSideBar,setOpenSideBar },
  } = useGlobalContext();
  return (

    <>
    {!openSideBar?(
       <MenuOutlinedIcon   sx={{fontSize:18}}
       onClick={()=>setOpenSideBar(!openSideBar)}
       className='text-slate-500  cursor-pointer hidden max-md:block'/>
    ):(
       <CloseOutlinedIcon sx={{fontSize:18}}  
       onClick={()=>setOpenSideBar(!openSideBar)}
       className='text-slate-500  cursor-pointer hidden max-md:block'/>
    )}
    
    </>
   
  )
}
