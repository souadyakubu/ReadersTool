const ProjectCard = ({ project }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-purple-900 to-pink-900 p-6 rounded-2xl shadow-xl"
        >
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.shortDescription}</p>
            <div className="flex gap-2">
                {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                        #{tag}
                    </span>
                ))}
            </div>
        </motion.div>
    )
}
