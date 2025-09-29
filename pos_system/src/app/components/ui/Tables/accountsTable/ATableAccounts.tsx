import TableHead from "./ATableHead";
import TableBody from "./AtableBody";
import { userObject } from "@/app/components/common/userObject";
import TableFooter from "./ATableFooter";

type TableAccountsProps = {
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
  setLimit: (limit: number) => void;
}

export default function TableAccounts({
    accounts, 
    loading, 
    page, 
    setPage, 
    totalPages, 
    sortColumn,
    setSortColumn,
    sortAsc,
    setSortAsc,
    fetchData,
    setLimit
  }
    :TableAccountsProps)  {

  return (
    <div className="relative mx-10 border border-gray-300 rounded-lg shadow-lg bg-white overflow-hidden">
      <table className="table-auto w-full border-collapse border-gray-300 rounded-lg shadow-lg bg-white">
        <TableHead 
          sortColumn={sortColumn} 
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
          totalPages={totalPages}
          setLimit={setLimit}/>
        
      </table>
    </div>
  );
}