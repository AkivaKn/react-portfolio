export default function Skill({ icon, name }) {
    return (
        <div className="flex flex-col items-center text-2xl">
            {icon}
            <h4 className="text-xs">{name}</h4>
        </div>
    )
}