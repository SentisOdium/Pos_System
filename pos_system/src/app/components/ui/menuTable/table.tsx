import TableHead from "./tableHead";
import TableBody from "./tableBody";
import TableFooter from "./tableFooter";
export default function TableMenus() {

  return (
    <div className=" inset-0 flex items-center justify-center">
      <table className="border border-gray-300 rounded-lg shadow-lg bg-white">
        <TableHead />
        <TableBody />
        <TableFooter />
      </table>
    </div>
  );
}