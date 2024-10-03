export default function SkillsCard({ skillSet }) {
  return (
    <div className="bg-gray-100 shadow-lg rounded-xl p-4 text-center">
      <h4 className="text-lg md:text-xl font-bold mb-4 text-gray-800 border-b-2 border-gray-300 pb-2">
        {skillSet.title}
      </h4>
      <div className="flex justify-evenly space-x-2 flex-wrap">
        {skillSet.skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center mb-2 min-w-8">
            <div className="text-lg md:text-4xl">{skill.icon}</div>
            <p className="text-xs md:text-sm mt-1 md:mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
