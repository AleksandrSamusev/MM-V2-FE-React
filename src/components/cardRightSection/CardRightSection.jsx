const CardRightSection = () => {
    return (
        <div style={{backgroundColor: "#0F0F0F", minHeight: "50vh", width: "30%"}}>
            <div className="div-card-manager" style={{marginBottom: "5rem", borderColor: "transparent"}}>
                <div className="div-inner-left-manager-second dark-blue-background">July total</div>
                <div className="div-inner-right-manager-second dark-red-background">-100.00€</div>
            </div>
            <span style={{color: "white", backgroundColor: "transparent", fontWeight: "500"}}>Income in selected period</span>
            <table cellSpacing="0" cellPadding="0" border="0" width="100%" style={{marginTop: "1rem"}}>
                <tbody>
                <tr>
                    <td>
                        <div style={{width: "100%", height: "11.75rem", overflow: "auto"}}>
                            <table cellSpacing="0" cellPadding="0" border="0" width="100%"
                                   style={{fontWeight: "300", fontSize: "0.85rem"}}>
                                <tbody>
                                <tr>
                                    <td className="cell-blue">03-01-2025</td>
                                    <td className="cell-blue">3.50 €</td>
                                    <td className="cell-blue">Some payment</td>
                                </tr>
                                <tr>
                                    <td className="cell-brown">04-01-2025</td>
                                    <td className="cell-brown">1.50 €</td>
                                    <td className="cell-brown">Some payment</td>
                                </tr>
                                <tr>
                                    <td className="cell-blue">07-01-2025</td>
                                    <td className="cell-blue">20.00 €</td>
                                    <td className="cell-blue">Some payment</td>
                                </tr>
                                <tr>
                                    <td className="cell-brown">11-01-2025</td>
                                    <td className="cell-brown">4.00 €</td>
                                    <td className="cell-brown">ABC Company</td>
                                </tr>
                                <tr>
                                    <td className="cell-blue">14-01-2025</td>
                                    <td className="cell-blue">1.50 €</td>
                                    <td className="cell-blue">Payment from Bob</td>
                                </tr>
                                <tr>
                                    <td className="cell-brown">11-01-2025</td>
                                    <td className="cell-brown">4.00 €</td>
                                    <td className="cell-brown">ABC Company</td>
                                </tr>
                                <tr>
                                    <td className="cell-blue">14-01-2025</td>
                                    <td className="cell-blue">1.50 €</td>
                                    <td className="cell-blue">Payment from Bob</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
            <br/>
            <span style={{color: "white", backgroundColor: "transparent", fontWeight: "500"}}>Income in selected period</span>
            <table cellSpacing="0" cellPadding="0" border="0" width="100%"
                   style={{marginTop: "1rem", fontWeight: "300", fontSize: "0.85rem"}}>
                <tbody>
                <tr>
                    <td>
                        <div style={{width: "100%", height: "11.75rem", overflow: "auto"}}>
                            <table cellSpacing="0" cellPadding="1" border="0" width="100%">
                                <tbody>
                                <tr>
                                    <td className="cell-blue">03-01-2025</td>
                                    <td className="cell-blue">3.50 €</td>
                                    <td className="cell-blue">Some payment</td>
                                </tr>
                                <tr>
                                    <td className="cell-brown">04-01-2025</td>
                                    <td className="cell-brown">1.50 €</td>
                                    <td className="cell-brown">Some payment</td>
                                </tr>
                                <tr>
                                    <td className="cell-blue">07-01-2025</td>
                                    <td className="cell-blue">20.00 €</td>
                                    <td className="cell-blue">Some payment</td>
                                </tr>
                                <tr>
                                    <td className="cell-brown">11-01-2025</td>
                                    <td className="cell-brown">4.00 €</td>
                                    <td className="cell-brown">ABC Company</td>
                                </tr>
                                <tr>
                                    <td className="cell-blue">14-01-2025</td>
                                    <td className="cell-blue">1.50 €</td>
                                    <td className="cell-blue">Payment from Bob</td>
                                </tr>
                                <tr>
                                    <td className="cell-brown">11-01-2025</td>
                                    <td className="cell-brown">4.00 €</td>
                                    <td className="cell-brown">ABC Company</td>
                                </tr>
                                <tr>
                                    <td className="cell-blue">14-01-2025</td>
                                    <td className="cell-blue">1.50 €</td>
                                    <td className="cell-blue">Payment from Bob</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CardRightSection;