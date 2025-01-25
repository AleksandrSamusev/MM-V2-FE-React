import "./tableSection.css"

const TableSection = () => {
    return (
        <div className="div-table">
            <table>
                <tbody>
                <tr>
                    <td>Income</td>
                    <td className="cell-end-align">30.50</td>
                    <td className="cell-end-align">EUR</td>
                </tr>
                <tr>
                    <td>Expense</td>
                    <td className="cell-end-align">130.50</td>
                    <td className="cell-end-align">EUR</td>
                </tr>
                <tr>
                    <td className="cell-title-with-background">Balance in selected period</td>
                    <td className="cell-text-red-with-background-end-align">-100.00</td>
                    <td className="cell-text-red-with-background-end-align">EUR</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableSection;