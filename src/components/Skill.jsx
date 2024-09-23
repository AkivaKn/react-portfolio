export default function Skill({ icon, name }) {
    return (
        <div className="flex flex-col items-center text-xl">
            {icon}
            <h4>{name}</h4>
        </div>
    )
}