import TableFooter from "./STableFooter";
import TableHead from "./STableHead";
import { salesObject } from "@/app/components/common/userObject";

type TableSalesProps = {
  sales: salesObject[];
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

export default function TableSales({
    sales, 
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
    :TableSalesProps){
        return(
            <div className="relative mx-10 border border-gray-300 rounded-lg shadow-lg bg-white overflow-hidden">
                <table className="table-auto w-full border-collapse border-gray-300 rounded-lg shadow-lg bg-white">
                <TableHead 
                    sortColumn={sortColumn} 
                    setSortColumn={setSortColumn} 
                    sortAsc={sortAsc} 
                    setSortAsc={setSortAsc}/>
            
                {/* <TableBody menu={menu} loading={loading} fetchData={() => fetchData()}/> */}
            
                <TableFooter 
                    page={page}
                    setPage={setPage}
                    totalPages={totalPages}
                    setLimit={setLimit}/>
                </table>
            </div>
        )
    }