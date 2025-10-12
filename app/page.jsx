'use client'

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <img 
                                src="/images/Medicup.png" 
                                alt="Medicup Logo" 
                                className="h-12"
                                style={{maxWidth: '150px'}}
                            />
                        </div>
                        <div className="hidden md:flex space-x-6">
                            <a href="#hero" className="transition-colors" style={{color: '#184c3e'}} onMouseEnter={(e) => e.target.style.opacity = '0.8'} onMouseLeave={(e) => e.target.style.opacity = '1'}>Accueil</a>
                            <a href="#presentation" className="transition-colors" style={{color: '#184c3e'}} onMouseEnter={(e) => e.target.style.opacity = '0.8'} onMouseLeave={(e) => e.target.style.opacity = '1'}>Présentation</a>
                            <a href="#palmares" className="transition-colors" style={{color: '#184c3e'}} onMouseEnter={(e) => e.target.style.opacity = '0.8'} onMouseLeave={(e) => e.target.style.opacity = '1'}>Palmarès</a>
                            <a href="#galerie" className="transition-colors" style={{color: '#184c3e'}} onMouseEnter={(e) => e.target.style.opacity = '0.8'} onMouseLeave={(e) => e.target.style.opacity = '1'}>Galerie</a>
                            <a href="#video" className="transition-colors" style={{color: '#184c3e'}} onMouseEnter={(e) => e.target.style.opacity = '0.8'} onMouseLeave={(e) => e.target.style.opacity = '1'}>Vidéo</a>
                            <a href="#organisateurs" className="transition-colors" style={{color: '#184c3e'}} onMouseEnter={(e) => e.target.style.opacity = '0.8'} onMouseLeave={(e) => e.target.style.opacity = '1'}>Organisateurs</a>
                            <a href="#sponsors" className="transition-colors" style={{color: '#184c3e'}} onMouseEnter={(e) => e.target.style.opacity = '0.8'} onMouseLeave={(e) => e.target.style.opacity = '1'}>Sponsors</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Section Hero */}
            <section 
                id="hero" 
                className="pt-20 pb-16 bg-cover bg-center bg-no-repeat relative"
                style={{
                    backgroundImage: "url('/images/header-medicup.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                {/* Light overlay for better text readability */}
                
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="py-20">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{color: '#eae7d7'}}>
                            Medicup
                        </h1>
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
                    
                    {/* Flickr Gallery Preview */}
                    <div className="max-w-4xl mx-auto text-center mb-8">
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <a 
                                data-flickr-embed="true" 
                                href="https://www.flickr.com/photos/203644508@N02" 
                                title=""
                            >
                                <img 
                                    src="https://live.staticflickr.com/65535/54848389184_ce9c87be5d.jpg" 
                                    width="640" 
                                    height="480" 
                                    alt=""
                                    className="rounded-lg shadow-md mx-auto"
                                    style={{
                                        maxHeight: '400px',
                                        width: 'auto',
                                        height: 'auto'
                                    }}
                                />
                            </a>
                            <script async src="//embedr.flickr.com/assets/client-code.js" charSet="utf-8"></script>
                        </div>
                        
                        {/* Link to full gallery */}
                        <div className="mt-6">
                            <a 
                                href="https://flic.kr/ps/46Xjb7" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                                style={{
                                    backgroundColor: '#184c3e',
                                    textDecoration: 'none'
                                }}
                                onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                                onMouseLeave={(e) => e.target.style.opacity = '1'}
                            >
                                Retrouvez toutes les photos
                            </a>
                        </div>
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
                    
                    <div className="flex flex-col items-center">
                        <div className="text-center">
                            <div className="w-80 h-80 mx-auto mb-6 overflow-hidden rounded-full border-4 border-gray-200 shadow-lg">
                                <img 
                                    src="/images/organisateurs-ioana-etienne.jpg" 
                                    alt="Dre Ioana & Dr Etienne Barras" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900">Dre Ioana & Dr Etienne Barras</h3>
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
                    
                    {/* Sponsors Platine */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-center mb-8" style={{color: '#e5e7eb'}}>
                            <span className="bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent">
                                SPONSORS PLATINE
                            </span>
                        </h3>
                        <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
                            {[
                                { name: 'UBS', image: '/images/UBS.png' },
                                { name: 'Dentavis', image: '/images/Dentavis.png' },
                                { name: 'Dianalabs Valais', image: '/images/Dianalabs Valais.png' },
                                { name: 'Gespower', image: '/images/Gespower.png' }
                            ].map((sponsor, index) => (
                                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <div className="flex flex-col items-center">
                                        <div className="w-full max-w-md mb-4 flex items-center justify-center" style={{minHeight: '120px'}}>
                                            <img 
                                                src={sponsor.image} 
                                                alt={sponsor.name}
                                                className="max-w-full max-h-full object-contain"
                                                style={{maxWidth: '400px', maxHeight: '120px'}}
                                            />
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-800 text-center mt-2">
                                            {sponsor.name}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Sponsors Or */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-center mb-8" style={{color: '#fbbf24'}}>
                            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                                SPONSORS OR
                            </span>
                        </h3>
                        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
                            {[
                                { name: 'Valère Clinique', image: '/images/Valère Clinique.png' },
                                { name: 'Barras & Associés', image: '/images/Barras & Associés.png' }
                            ].map((sponsor, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                    <div className="flex flex-col items-center">
                                        <div className="w-full max-w-sm mb-4 flex items-center justify-center" style={{minHeight: '100px'}}>
                                            <img 
                                                src={sponsor.image} 
                                                alt={sponsor.name}
                                                className="max-w-full max-h-full object-contain"
                                                style={{maxWidth: '380px', maxHeight: '100px'}}
                                            />
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-800 text-center mt-2">
                                            {sponsor.name}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Sponsors Argent */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold text-center mb-8" style={{color: '#9ca3af'}}>
                            <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
                                SPONSORS ARGENT
                            </span>
                        </h3>
                        <div className="flex flex-wrap justify-center gap-6">
                            {[
                                { name: 'Accadent', image: '/images/Accadent.png' },
                                { name: 'Kaladent', image: '/images/Kaladent.png' },
                                { name: 'Optision', image: '/images/Optision.png' },
                                { name: 'Orcos Medical', image: '/images/Orcos Medical.png' },
                                { name: 'Domaine des Roses', image: '/images/Domaine des Roses.png' },
                                { name: 'Dentimed', image: '/images/Dentimed.png' },
                                { name: 'Jo Gaudard', image: '/images/Jo Gaudard.png' }
                            ].map((sponsor, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                                    <div className="flex flex-col items-center">
                                        <div className="w-full mb-3 flex items-center justify-center" style={{minHeight: '80px'}}>
                                            <img 
                                                src={sponsor.image} 
                                                alt={sponsor.name}
                                                className="max-w-full max-h-full object-contain"
                                                style={{maxWidth: '280px', maxHeight: '80px'}}
                                            />
                                        </div>
                                        <h4 className="text-sm font-semibold text-gray-800 text-center mt-1">
                                            {sponsor.name}
                                        </h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Sponsors Bronze */}
                    <div>
                        <h3 className="text-3xl font-bold text-center mb-8" style={{color: '#cd7c2f'}}>
                            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                                SPONSORS BRONZE
                            </span>
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                { name: 'Fortbildung Zürichsee', image: '/images/Fortbildung Zürichsee.png' },
                                { name: 'Groupe Mutuel', image: '/images/Groupe Mutuel.png' },
                                { name: 'Valais Assurances', image: '/images/Valais Assurances.png' },
                                { name: 'Pharmacie D.Machoud', image: '/images/Pharmacie D.Machoud.png' },
                                { name: 'Smile Design', image: '/images/Smile Design.png' }
                            ].map((sponsor, index) => (
                                <div key={index} className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                                    <div className="flex flex-col items-center">
                                        <div className="w-full mb-2 flex items-center justify-center" style={{minHeight: '60px'}}>
                                            <img 
                                                src={sponsor.image} 
                                                alt={sponsor.name}
                                                className="max-w-full max-h-full object-contain"
                                                style={{maxWidth: '180px', maxHeight: '60px'}}
                                            />
                                        </div>
                                        <h4 className="text-xs font-semibold text-gray-800 text-center mt-1">
                                            {sponsor.name}
                                        </h4>
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
