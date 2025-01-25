import "./tableRow.css"

const TableRow = (props) => {
    return (
        <tr>
            <td className={props.style}>{props.date}</td>
            <td className={props.style}>{props.value}</td>
            <td className={props.style}>{props.comment}</td>
        </tr>
    )
}

export default TableRow;