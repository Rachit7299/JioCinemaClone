
import { useEffect, useState } from 'react';
import Tags from '../components/tags/tags';

interface DisplayProps {
    currentPage: string;
  }

const Display: React.FC<DisplayProps> = ({currentPage}) => {

    const [filter,setFilter] = useState("");

    console.log(filter);

    useEffect(() => {
        setFilter("");
    }, [currentPage])

    console.log(currentPage);
    return (
        <>
        <Tags category={currentPage} setFilter={setFilter} filter={filter}></Tags>
        </>
    );
}

export default Display;