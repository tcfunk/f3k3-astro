export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
    main: {
        id: 'main',
        faqs: [
            {
                question: "Is F3 really free?",
                answer: "Yes, F3 will forever be 100% FREE and Open to ALL men."
            },
            {
                question: "What do I need for my first workout?",
                answer: "Just bring yourself and a pair of gloves. Simply show up and introduce yourself as a new guy and you will be welcomed!"
            },
        ]
    }
};
