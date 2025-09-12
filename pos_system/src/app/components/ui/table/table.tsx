import TableHead from "./tableHead";
import TableBody from "./tableBody";
import TableFooter from "./tableFooter";
export default function Table() {

  return (
    <div className="w-full flex justify-center items-center">
      <table className="min-w-full bg-white ">
        <TableHead />
        <TableBody />
        <TableFooter />
      </table>
    </div>
  );
}