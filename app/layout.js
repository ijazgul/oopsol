import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/all.min.css"
import "/public/assets/css/magnific-popup.css"
import "/public/assets/css/nice-select.css"
import "/public/assets/css/swiper.min.css"
import "/public/assets/css/aos.css"
import "/public/assets/css/main.css"

import { Manrope, Plus_Jakarta_Sans } from 'next/font/google'

const manrope = Manrope({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--manrope",
    display: 'swap',
})
const jakarta = Plus_Jakarta_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--jakarta",
    display: 'swap',
})
export const metadata = {
    title: 'OOPSOL - Your Gateway to Growth and Innovation 🚀',
    description: 'We specialize in web development, SEO, digital marketing, graphic design, and packaging, boosting your brand digital presence and growth.',
    keywords: 'OopSol, Web Development, SEO, Digital Marketing, Packaging Solutions, Graphic Design, App Development, Cloud Development, Custom Software',
    alternates: {
        canonical: 'https://oopsol.com', // Add your canonical URL here
      },
     meta: [
        {
            name: 'probely-verification',
            content: '10480c66-8df9-4c7f-9b01-60f94f539c1e',
        },
    ],
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${manrope.variable} ${jakarta.variable} position-relative bg2-clr`}>{children}</body>
        </html>
    )
}
