import React from "react";
import { salesObject } from "@/app/components/common/userObject";
import { TableBodyProps } from "@/app/components/common/userObject";
import Spinner from "../../spinner/spinner";
import { DeleteBtn } from "../../buttons/TableBtn";
import { UpdateBtn } from "../../buttons/TableBtn";
type SalesBodyProps = TableBodyProps & {
    sales: salesObject[];
}

export default function TableBody({loading, fetchData, sales}: SalesBodyProps){
    return(
        <tbody>
            {loading?
                (
                    <tr key="loading">
                        <td colSpan={8} className='text-center p-4'> <Spinner /> </td>
                    </tr>
                )
                : !sales || sales.length === 0 ? 
                (
                    <tr key="no-sales">
                        <td colSpan={8} className='text-center p-4'>No Sales Record Found in the Database!</td>
                    </tr>
                )
                :
                (
                    sales.map(records => (
                        <tr key={records.OrderId}>
                            <td className="p-4">{new Date(records.createAt).toLocaleString()}</td>
                            <td className="p-4">{records.name}</td>
                            <td className="p-4">{records.address}</td>
                            <td className="p-4">{records.orders}</td>
                            <td className="p-4">{records.deliveryFee}</td>
                            <td className="p-4">{records.subTotal}</td>
                            <td className="p-4">{records.total}</td>
                            <td className="p-4 flex">
                                <UpdateBtn id={records.OrderId} fetchData={fetchData} mode="sales"/>
                                <DeleteBtn id={records.OrderId} mode="sales" fetchData={fetchData}/>
                            </td>
                        </tr>
                    ))
                )
            }
        </tbody>
    )
}