import { Zap, Shield, Heart, Coffee, Smile, Type, TabletSmartphone, CodeXml, Ban, Handshake, UsersRound, Dumbbell, CloudSunRain } from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Ban,
                title: 'Free of Charge',
                description: 'Never pay to workout, ever.'
            },
            {
                icon: UsersRound,
                title: 'Open to all Men',
                description: 'No matter the man, you are welcome here.'
            },
            {
                icon: CloudSunRain,
                title: 'Held Outdoors',
                description: 'Rain or Shine, Hot or Cold, we are out there.'
            },
            {
                icon: Dumbbell,
                title: 'Peer Led',
                description: 'Rotating fashion of men leading each other.'
            },
            {
                icon: Handshake,
                title: 'Ends with a CoT',
                description: 'Always end with a Circle of Trust.'
            }
        ]
    },
    secondary: {
        id: 'secondary',
        features: [
            {
                icon: Heart,
                title: 'Made with Love',
                description: 'Crafted with attention to detail'
            },
            {
                icon: Coffee,
                title: 'Always Fresh',
                description: 'Regular updates and improvements'
            },
            {
                icon: Smile,
                title: 'User Friendly',
                description: 'Intuitive and easy to use'
            }
        ]
    }
};
