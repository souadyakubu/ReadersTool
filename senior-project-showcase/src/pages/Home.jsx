const Home = () => (
    <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white"
    >
        <div className="container mx-auto px-4 py-20">
            <h1 className="text-6xl font-bold mb-6 animate-float">
                Senior Projects Showcase
            </h1>
            <p className="text-xl text-gray-300 mb-8">
                Exploring innovative solutions in computer science
            </p>
        </div>
    </motion.section>
)
