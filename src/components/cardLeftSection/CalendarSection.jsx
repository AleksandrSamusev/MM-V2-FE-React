import "./calendarSection.css"
import QuarterMonthComponent from "./QuarterMonthComponent.jsx";

const CalendarSection = () => {
    return (
        <>
            <span className="calendar-section-title">Select a period (quarter or month)</span>
            <div className="common-quarter-month-div">
                <QuarterMonthComponent quarter={"Q1"}/>
                <QuarterMonthComponent quarter={"Q2"}/>
                <QuarterMonthComponent quarter={"Q3"}/>
                <QuarterMonthComponent quarter={"Q4"}/>
            </div>
        </>
    )
}

export default CalendarSection;