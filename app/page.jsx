'use client'

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="text-2xl font-bold" style={{color: '#184c3e'}}>Medicup</div>
                        <div className="hidden md:flex space-x-6">
                            <a href="#hero" className="text-gray-700 transition-colors" style={{"--tw-text-opacity": "1"}} onMouseEnter={(e) => e.target.style.color = '#184c3e'} onMouseLeave={(e) => e.target.style.color = ''}>Accueil</a>
                            <a href="#presentation" className="text-gray-700 transition-colors" style={{"--tw-text-opacity": "1"}} onMouseEnter={(e) => e.target.style.color = '#184c3e'} onMouseLeave={(e) => e.target.style.color = ''}>Présentation</a>
                            <a href="#palmares" className="text-gray-700 transition-colors" style={{"--tw-text-opacity": "1"}} onMouseEnter={(e) => e.target.style.color = '#184c3e'} onMouseLeave={(e) => e.target.style.color = ''}>Palmarès</a>
                            <a href="#galerie" className="text-gray-700 transition-colors" style={{"--tw-text-opacity": "1"}} onMouseEnter={(e) => e.target.style.color = '#184c3e'} onMouseLeave={(e) => e.target.style.color = ''}>Galerie</a>
                            <a href="#video" className="text-gray-700 transition-colors" style={{"--tw-text-opacity": "1"}} onMouseEnter={(e) => e.target.style.color = '#184c3e'} onMouseLeave={(e) => e.target.style.color = ''}>Vidéo</a>
                            <a href="#organisateurs" className="text-gray-700 transition-colors" style={{"--tw-text-opacity": "1"}} onMouseEnter={(e) => e.target.style.color = '#184c3e'} onMouseLeave={(e) => e.target.style.color = ''}>Organisateurs</a>
                            <a href="#sponsors" className="text-gray-700 transition-colors" style={{"--tw-text-opacity": "1"}} onMouseEnter={(e) => e.target.style.color = '#184c3e'} onMouseLeave={(e) => e.target.style.color = ''}>Sponsors</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Section Hero */}
            <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-green-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="py-20">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{color: '#184c3e'}}>
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
                            Qu&apos;est-ce que la Medicup ? La 25ᵉ édition de la Medicup s&apos;est tenue le 19 septembre 2025 au Golf Club de Sion, sous un soleil radieux. Cet incontournable tournoi de golf réunit chaque année les professionnel·le·s de la santé de Suisse romande. Cette année, 83 participant·e·s ont pris part à la compétition, réparti·e·s en 21 flights.
                            <br /><br />
                            Les organisateurs, Dre Ioana et Dr Etienne Barras, se sont réjouis de cette belle édition et ont chaleureusement remercié les sponsors pour leurs généreuses dotations. L&apos;événement soutenait cette année l&apos;association Aina Vao, et les champions du jour ont été annoncés par le club manager Sébastien Paratte lors de la remise des prix.
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
                    
                    {/* Résultats du tournoi */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        {/* Classement Brut */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Classement Brut</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="text-center p-6 bg-yellow-50 rounded-lg border-2 border-yellow-200">
                                    <div className="text-4xl mb-2">🏆</div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">1ers</h4>
                                    <p className="text-gray-700 font-medium">Antoine Lutin (Swiss PGA) &</p>
                                    <p className="text-gray-700 font-medium">Nathalie Féraud (GC Crans-sur-Sierre)</p>
                                    <p className="text-xl font-bold text-yellow-600 mt-2">42 pts</p>
                                </div>
                                <div className="text-center p-6 bg-gray-50 rounded-lg border-2 border-gray-200">
                                    <div className="text-4xl mb-2">🥈</div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">2es</h4>
                                    <p className="text-gray-700 font-medium">Francisco Valera &</p>
                                    <p className="text-gray-700 font-medium">Anna Muresan</p>
                                    <p className="text-xl font-bold text-gray-600 mt-2">39 pts</p>
                                </div>
                            </div>
                        </div>

                        {/* Classement Net */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Classement Net</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="text-center p-6 bg-green-50 rounded-lg border-2 border-green-200">
                                    <div className="text-4xl mb-2">🏆</div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">1res</h4>
                                    <p className="text-gray-700 font-medium">Christel Dagon (GC Sion) &</p>
                                    <p className="text-gray-700 font-medium">Nathalie Schmidt (ASGI)</p>
                                    <p className="text-xl font-bold text-green-600 mt-2">48 pts</p>
                                </div>
                                <div className="text-center p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
                                    <div className="text-4xl mb-2">🥈</div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">2es</h4>
                                    <p className="text-gray-700 font-medium">Yann Pitteloud &</p>
                                    <p className="text-gray-700 font-medium">Maly Kaddoura-Soa</p>
                                    <p className="text-xl font-bold text-blue-600 mt-2">48 pts</p>
                                    <p className="text-sm text-gray-500 mt-1">(départagés au retour)</p>
                                </div>
                            </div>
                        </div>

                        {/* Concours de Précision et Distance */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Concours de Précision et Distance</h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {/* Nearest to the Pin - Trou 3 */}
                                <div className="text-center p-6 bg-purple-50 rounded-lg">
                                    <div className="text-3xl mb-3">🎯</div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Nearest to the Pin</h4>
                                    <p className="text-sm text-gray-600 mb-3">Trou n°3</p>
                                    <div className="space-y-1">
                                        <p className="text-gray-700 font-medium">Nathalie Féraud</p>
                                        <p className="text-sm text-gray-600">(GC Crans-sur-Sierre)</p>
                                        <p className="text-gray-700 font-medium">Laurent Gillain</p>
                                        <p className="text-sm text-gray-600">(GC Lausanne)</p>
                                    </div>
                                </div>

                                {/* Longest Drive - Trou 8 */}
                                <div className="text-center p-6 bg-red-50 rounded-lg">
                                    <div className="text-3xl mb-3">💪</div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Longest Drive</h4>
                                    <p className="text-sm text-gray-600 mb-3">Trou n°8</p>
                                    <div className="space-y-1">
                                        <p className="text-gray-700 font-medium">Anna Muresan</p>
                                        <p className="text-sm text-gray-600">(ASGI)</p>
                                        <p className="text-gray-700 font-medium">Gilles Taboulot</p>
                                        <p className="text-sm text-gray-600">(GC Sion)</p>
                                    </div>
                                </div>

                                {/* Nearest to the Pin - Trou 17 */}
                                <div className="text-center p-6 bg-indigo-50 rounded-lg">
                                    <div className="text-3xl mb-3">🎯</div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Nearest to the Pin</h4>
                                    <p className="text-sm text-gray-600 mb-3">Trou n°17</p>
                                    <div className="space-y-1">
                                        <p className="text-gray-700 font-medium">Beat Fischer</p>
                                        <p className="text-sm text-gray-600">(GC Bossey)</p>
                                        <p className="text-gray-700 font-medium">Mireille Röthlisberger</p>
                                        <p className="text-sm text-gray-600">(ASGI)</p>
                                    </div>
                                </div>
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
                                    href="https://www.perlprod.ch/" 
                                    className="font-medium"
                                    style={{color: '#184c3e'}}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                                    onMouseLeave={(e) => e.target.style.opacity = '1'}
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
            <footer className="text-white py-8" style={{backgroundColor: '#184c3e'}}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Medicup</h3>
                    <p className="opacity-80">
                        Tournoi de golf annuel - 25e édition
                    </p>
                    <p className="opacity-80 text-sm mt-2">
                        © 2025 Medicup. Tous droits réservés.
                    </p>
                </div>
            </footer>
        </div>
    );
}
