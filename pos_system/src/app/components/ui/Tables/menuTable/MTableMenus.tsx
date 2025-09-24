import TableHead from "./MTableHead";
import TableBody from "./MTableBody";
import TableFooter from "./MTableFooter";
import { menuObject } from "../../../common/userObject";

type TableMenuProps = {
  menu: menuObject[];
  loading: boolean;
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
  searchQuery: string;
  setsearchQuery: (query: string) => void;
  sortColumn: string;
  setSortColumn: (sortColumn: string) => void;
  sortAsc: boolean;
  setSortAsc: (asc: boolean) => void;
  fetchData: () => void;
  setLimit: (limit: number) => void;
}
export default function TableMenus({
    menu, 
    loading, 
    page, 
    setPage, 
    totalPages, 
    sortColumn,
    setSortColumn,
    sortAsc,
    setSortAsc,
    fetchData,
    setLimit}
    :TableMenuProps) 

{

  return (
    <div className=" inset-0 flex items-center justify-center">
      <table className="border border-gray-300 rounded-lg shadow-lg bg-white">
        <TableHead 
          sortColumn={sortColumn} 
          setSortColumn={setSortColumn} 
          sortAsc={sortAsc} 
          setSortAsc={setSortAsc}/>

        <TableBody menu={menu} loading={loading} fetchData={() => fetchData()}/>

        <TableFooter 
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          setLimit={setLimit}/>
      </table>
    </div>
  );
}