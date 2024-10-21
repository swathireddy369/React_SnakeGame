export default function Food({ pixel }) {

    return <div className="food" style={{ gridColumn: pixel.y, gridRow: pixel.x }}>


    </div>
}