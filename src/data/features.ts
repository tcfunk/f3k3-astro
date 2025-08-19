
export interface Feature {
    icon: string;
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
                icon: 'mdi:money-off',
                title: 'Free of Charge',
                description: 'Never pay to workout, ever.'
            },
            {
                icon: 'mdi:users-group',
                title: 'Open to all Men',
                description: 'No matter the man, you are welcome here.'
            },
            {
                icon: 'mdi:outdoor-temperature',
                title: 'Held Outdoors',
                description: 'Rain or Shine, Hot or Cold, we are out there.'
            },
            {
                icon: 'mdi:teach',
                title: 'Peer Led',
                description: 'Rotating fashion of men leading each other.'
            },
            {
                icon: 'mdi:shield-person',
                title: 'Ends with a CoT',
                description: 'Always end with a Circle of Trust.'
            }
        ]
    },
};
