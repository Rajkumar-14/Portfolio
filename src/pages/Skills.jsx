export default function Skills() {
  const skills = ["React", "Tailwind", "JavaScript", "MongoDB", "Django"];

  return (
    <section className="pt-32 max-w-5xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="p-6 bg-slate-800 rounded-xl text-center hover:scale-105 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
