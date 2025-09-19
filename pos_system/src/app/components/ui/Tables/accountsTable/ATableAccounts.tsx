import TableHead from "./ATableHead";
import TableBody from "./AtableBody";
import { userObject } from "@/app/components/common/userObject";
import TableFooter from "./ATableFooter";

type TableMenuProps = {
  accounts: userObject[];
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
}

export default function TableAccounts({
    accounts, 
    loading, 
    page, 
    setPage, 
    totalPages, 
    searchQuery,
    setsearchQuery,
    sortColumn,
    setSortColumn,
    sortAsc,
    setSortAsc,
    fetchData
  }
    :TableMenuProps)  {

  return (
    <div className=" inset-0 flex items-center justify-center">
      <table className="border border-gray-300 rounded-lg shadow-lg bg-white">
        <TableHead sortColumn={sortColumn} 
          setSortColumn={setSortColumn} 
          sortAsc={sortAsc} 
          setSortAsc={setSortAsc}/>

        <TableBody 
          accounts={accounts} 
          loading={loading}  
          fetchData={() => fetchData()}/>

        <TableFooter 
          page={page}
          setPage={setPage}
          totalPages={totalPages}/>
        
      </table>
    </div>
  );
}