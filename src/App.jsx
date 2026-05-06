<div onClick={() => toggleProject("email")} className="group cursor-pointer relative overflow-hidden border border-purple-500/20 rounded-xl p-5 bg-black/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]">

  <div className="flex justify-between items-center">
    <div className="flex items-center gap-3">
      <span className="text-xl">🔐</span>
      <div>
        <p className="text-purple-200 font-semibold">
          Email Spam Classifier
        </p>
        <p className="text-xs text-gray-500">
          ML-based email filtering system
        </p>
      </div>
    </div>
    <span className="text-sm text-gray-400">ML</span>
  </div>

  {/* EXPANDED */}
  {activeProject === "email" && (
    <div className="mt-4 border-t border-purple-500/20 pt-4 animate-fadeIn text-sm text-gray-300">

      <p className="mb-3">
        A machine learning system that classifies emails as spam or safe using NLP techniques.
      </p>

      {/* TECH BADGES */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-2 py-1 text-xs bg-purple-500/20 rounded">Python</span>
        <span className="px-2 py-1 text-xs bg-purple-500/20 rounded">Scikit-learn</span>
        <span className="px-2 py-1 text-xs bg-purple-500/20 rounded">NLP</span>
      </div>

      {/* LINKS */}
      <div className="flex gap-4">
        <a
          href="https://github.com/Hikma1"
          target="_blank"
          className="text-purple-400 hover:text-purple-300 underline"
        >
          GitHub
        </a>

        <a
          href="#"
          className="text-cyan-400 hover:text-cyan-300 underline"
        >
          Live Demo
        </a>
      </div>

    </div>
  )}
</div>