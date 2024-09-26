export default function SkillsCard({ skillSet }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 text-center">
      <h4 className="text-xl font-bold mb-4 text-gray-800 border-b-2 border-gray-300 pb-2">
        {skillSet.title}
      </h4>
      <div className="flex justify-center space-x-4">
        {skillSet.skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-4xl">{skill.icon}</div>
            <p className="text-sm mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
