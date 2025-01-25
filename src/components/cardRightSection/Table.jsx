import "./table.css"
import TableRow from "./TableRow.jsx";

const Table = (props) => {
    return (
        <>
            <span style={{color: "white", backgroundColor: "transparent", fontWeight: "500"}}>{props.title}</span>
            <table cellSpacing="0" cellPadding="0" border="0" width="100%" style={{marginTop: "1rem"}}>
                <tbody>
                <tr>
                    <td>
                        <div style={{width: "100%", height: "11.75rem", overflow: "auto"}}>
                            <table cellSpacing="0" cellPadding="0" border="0" width="100%"
                                   style={{fontWeight: "300", fontSize: "0.85rem"}}>
                                <tbody>
                                <TableRow date={"03-01-2025"} value={"3.50 €"} comment={"Some payment"}
                                          style={"cell-blue"}/>
                                <TableRow date={"04-01-2025"} value={"1.50 €"} comment={"Some payment"}
                                          style={"cell-brown"}/>
                                <TableRow date={"07-01-2025"} value={"20.00 €"} comment={"Some payment"}
                                          style={"cell-blue"}/>
                                <TableRow date={"11-01-2025"} value={"4.00 €"} comment={"ABC Company"}
                                          style={"cell-brown"}/>
                                <TableRow date={"14-01-2025"} value={"1.50 €"} comment={"Payment from Bob"}
                                          style={"cell-blue"}/>
                                <TableRow date={"11-01-2025"} value={"4.00 €"} comment={"ABC Company"}
                                          style={"cell-brown"}/>
                                <TableRow date={"14-01-2025"} value={"1.50 €"} comment={"Payment from Bob"}
                                          style={"cell-blue"}/>
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    )
}

export default Table;