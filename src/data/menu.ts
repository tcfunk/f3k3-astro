// src/data/menu.ts


export const locationMenu = [
    { name: 'Legion', link: '/ao/legion' },
    { name: 'Rivendell', link: '/ao/rivendell' },
    { name: 'Scarif', link: '/ao/scarif' },
]

export const headerMenu = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Locations', link: '/ao', showArrow: true,
        children: locationMenu
    }
];

export const footerMenu = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Join F3', link: '/contact' },
];

export const legalMenu = [
    { name: 'Privacy Policy', link: '/legal/privacy-policy' },
    { name: 'Terms of Service', link: '/legal/terms-of-service' }
];

