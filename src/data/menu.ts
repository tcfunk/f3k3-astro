// src/data/menu.ts

export const headerMenu = [
    // { name: 'Theme Info', link: '/theme-info' },
    // { name: 'Our Team', link: '/team' },
    // { name: 'Blog', link: '/blog' },
    { name: 'Locations', link: '/ao', showArrow: true,
        children: [
            { name: 'Legion', link: '/ao/legion' },
            { name: 'Rivendell', link: '/ao/rivendell' },
            { name: 'Scarif', link: '/ao/scarif' },
        ]
    }
];

export const footerMenu = [
    { name: 'Style Guide', link: '/style-guide' },
];

export const legalMenu = [
    { name: 'Privacy Policy', link: '/legal/privacy-policy' },
    { name: 'Terms of Service', link: '/legal/terms-of-service' }
];

