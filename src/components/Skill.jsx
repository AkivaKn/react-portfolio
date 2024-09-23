export default function Skill({ icon, name }) {
    return (
        <div className="flex flex-col items-center text-xl">
            {icon}
            <h3>{name}</h3>
        </div>
    )
}