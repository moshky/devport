const posts = [
  {
    id: 1,
    title: "Desarrollador Frontend React",
    empresa: "TechNova Solutions",
    tecnologias: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Ingeniero Backend Node.js",
    empresa: "CloudBridge Systems",
    tecnologias: ["Node.js", "Express", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Desarrollador Full Stack",
    empresa: "Pixelware Labs",
    tecnologias: ["Next.js", "Prisma", "Docker"],
  },
];

export default function PostsPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-white mb-2">Publicaciones</h1>
        <p className="text-slate-400">
          Explora las vacantes disponibles en la comunidad tech.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-slate-800 rounded-xl p-6">
            <h2 className="text-lg font-bold text-white mb-1">{post.title}</h2>
            <p className="text-slate-400 text-sm mb-3">{post.empresa}</p>
            <p className="text-blue-400 text-sm">
              {post.tecnologias.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}