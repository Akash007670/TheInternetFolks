import React ,{useState} from 'react'
import Navbar from '../Navbar/Navbar';
import Sidebar from '../SideBar';

const Home = () => {

    const[isOpen , setIsOpen] = useState('');

    const mytoggleHandler = (e) => {
        setIsOpen(!isOpen);
    }

    return (
        <>
        <Navbar mytoggleHandler = {mytoggleHandler} />
        <Sidebar isOpen = {isOpen} />
        </>
    )
}

export default Home
