export default function Snake({ pixel,index }) {
    return <div className="snake" key={index} style={{ gridColumn: pixel.y, gridRow: pixel.x }}>
    </div>
}