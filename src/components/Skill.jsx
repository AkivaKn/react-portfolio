export default function Skill({ icon, name }) {
    return (
        <div className="flex flex-col items-center text-3xl">
            {icon}
            <h4 className="text-sm">{name}</h4>
        </div>
    )
}