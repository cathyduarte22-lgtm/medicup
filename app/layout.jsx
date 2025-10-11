import '../styles/globals.css';

export const metadata = {
    title: {
        template: '%s | Medicup',
        default: 'Medicup - Tournoi de golf annuel'
    },
    description: 'Medicup - Le tournoi de golf annuel. Découvrez les résultats de la 25e édition qui a eu lieu le 19 septembre 2025.'
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-gray-900 bg-white">
                <main>{children}</main>
            </body>
        </html>
    );
}
