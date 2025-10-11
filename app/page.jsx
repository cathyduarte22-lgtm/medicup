export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="text-2xl font-bold text-green-800">Medicup</div>
                        <div className="hidden md:flex space-x-6">
                            <a href="#hero" className="text-gray-700 hover:text-green-800 transition-colors">Accueil</a>
                            <a href="#presentation" className="text-gray-700 hover:text-green-800 transition-colors">Présentation</a>
                            <a href="#palmares" className="text-gray-700 hover:text-green-800 transition-colors">Palmarès</a>
                            <a href="#galerie" className="text-gray-700 hover:text-green-800 transition-colors">Galerie</a>
                            <a href="#video" className="text-gray-700 hover:text-green-800 transition-colors">Vidéo</a>
                            <a href="#organisateurs" className="text-gray-700 hover:text-green-800 transition-colors">Organisateurs</a>
                            <a href="#sponsors" className="text-gray-700 hover:text-green-800 transition-colors">Sponsors</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Section Hero */}
            <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-green-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="py-20">
                        <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6">
                            Medicup
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                            Tournoi de golf annuel
                        </p>
                    </div>
                </div>
            </section>

            {/* Section Présentation */}
            <section id="presentation" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Qu&apos;est-ce que la Medicup ?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            L&apos;édition du 25e a eu lieu le 19 septembre 2025 sous une météo magnifique 
                            avec 83 participant·e·s réparti·e·s en 21 flights.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section Palmarès */}
            <section id="palmares" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Palmarès 2025
                        </h2>
                    </div>
                    
                    {/* Structure pour les résultats */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="text-center p-6 bg-yellow-50 rounded-lg">
                                <div className="text-4xl mb-2">🏆</div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">1ère place</h3>
                                <p className="text-gray-600">[À compléter]</p>
                            </div>
                            <div className="text-center p-6 bg-gray-50 rounded-lg">
                                <div className="text-4xl mb-2">🥈</div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">2ème place</h3>
                                <p className="text-gray-600">[À compléter]</p>
                            </div>
                            <div className="text-center p-6 bg-orange-50 rounded-lg">
                                <div className="text-4xl mb-2">🥉</div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">3ème place</h3>
                                <p className="text-gray-600">[À compléter]</p>
                            </div>
                        </div>
                        
                        {/* Tableau détaillé */}
                        <div className="mt-8">
                            <h4 className="text-xl font-semibold text-gray-900 mb-4">Classement complet</h4>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-gray-200">
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Position</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Nom</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Score</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Flight</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-100">
                                            <td className="py-3 px-4 text-gray-600" colspan="4">
                                                <em>Résultats à ajouter...</em>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Galerie Photos */}
            <section id="galerie" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Galerie photos
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {Array.from({ length: 8 }, (_, i) => (
                            <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                                <div className="w-full h-full flex items-center justify-center text-gray-500">
                                    <div className="text-center">
                                        <div className="text-4xl mb-2">📸</div>
                                        <p className="text-sm">Photo {i + 1}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Vidéo */}
            <section id="video" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Revivez l&apos;événement
                        </h2>
                    </div>
                    
                    <div className="max-w-4xl mx-auto">
                        <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden mb-4">
                            <div className="w-full h-full flex items-center justify-center text-gray-600">
                                <div className="text-center">
                                    <div className="text-6xl mb-4">▶️</div>
                                    <p className="text-xl">Vidéo à intégrer</p>
                                    <p className="text-sm text-gray-500 mt-2">
                                        (iframe YouTube/Vimeo)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-gray-600">
                                Vidéo réalisée par{" "}
                                <a 
                                    href="#" 
                                    className="text-green-800 hover:text-green-900 font-medium"
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    PerlProd
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Organisateurs */}
            <section id="organisateurs" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Les organisateurs
                        </h2>
                    </div>
                    
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                        <div className="text-center">
                            <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center text-gray-500">
                                    <div className="text-center">
                                        <div className="text-4xl mb-2">👤</div>
                                        <p className="text-sm">Photo</p>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Etienne Barras</h3>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center text-gray-500">
                                    <div className="text-center">
                                        <div className="text-4xl mb-2">👤</div>
                                        <p className="text-sm">Photo</p>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Ioana Barras</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Sponsors */}
            <section id="sponsors" className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Nos sponsors
                        </h2>
                    </div>
                    
                    {/* Sponsors Or */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold text-yellow-600 text-center mb-6">
                            Sponsors Or
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Array.from({ length: 3 }, (_, i) => (
                                <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                                    <div className="h-24 bg-gray-200 rounded flex items-center justify-center mb-4">
                                        <span className="text-gray-500">Logo sponsor or {i + 1}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Sponsors Argent */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold text-gray-500 text-center mb-6">
                            Sponsors Argent
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {Array.from({ length: 4 }, (_, i) => (
                                <div key={i} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                                    <div className="h-16 bg-gray-200 rounded flex items-center justify-center">
                                        <span className="text-gray-500 text-sm">Logo argent {i + 1}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Sponsors Bronze */}
                    <div>
                        <h3 className="text-2xl font-semibold text-orange-600 text-center mb-6">
                            Sponsors Bronze
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                            {Array.from({ length: 6 }, (_, i) => (
                                <div key={i} className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                                    <div className="h-12 bg-gray-200 rounded flex items-center justify-center">
                                        <span className="text-gray-500 text-xs">Logo {i + 1}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-green-800 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Medicup</h3>
                    <p className="text-green-200">
                        Tournoi de golf annuel - 25e édition
                    </p>
                    <p className="text-green-200 text-sm mt-2">
                        © 2025 Medicup. Tous droits réservés.
                    </p>
                </div>
            </footer>
        </div>
    );
}
