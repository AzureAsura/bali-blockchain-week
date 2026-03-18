export const aboutFeatures = [
    {
        title: "Talent & Workforce Acceleration",
        desc: "From literacy campaigns to certified blockchain developer programs to building a ready-to-hire national talent pipeline"
    },
    {
        title: "National Ecosystem Convergence",
        desc: "A multi-sector platform uniting universities, startups,VCs, enterprises, regulators, and Web3 communities across Indonesia’s."
    },
    {
        title: "Policy Alignment",
        desc: "Closed-door roundtables and cross-sector MoUs shaping practical blockchain policy and real-world adoption."
    }
]

export const galleryItems = Array.from({ length: 23 }, (_, i) => ({
    id: i + 1,
    title: 'Dummy',
    image: `/gallery/img${i + 1}.webp`,
}));

export const getInvolvedCard = [
    {
        id: 2,
        title: "Become A Sponsor",
        description: "Scale your brand visibility with a premium audience.",
        image: "/gallery/img12.webp",
        className: "md:col-span-1 md:row-span-1",
        href: '/sponsorship',

    },
    {
        id: 3,
        title: "Partner as Media",
        description: "Access exclusive press materials and cover groundbreaking news.",

        image: "/gallery/img20.webp",
        className: "md:col-span-1 md:row-span-2",
        href: '/media',

    },
    {
        id: 4,
        title: "Become an Affiliate",
        description: "Promote the world's top event and earn high-tier commissions.",
        image: "/gallery/img9.webp",
        className: "md:col-span-1 md:row-span-1",
        href: '#',

    },
];



export const faqData = [
    {
        category: "General",
        questions: [
            { q: "What is Bali Blockchain Weeks?", a: "Bali Blockchain Weeks 2026 is a multi-pillar program aimed at strengthening blockchain adoption in Indonesia and positioning the country as the Web3 Hub of Southeast Asia" },
            { q: "When will the event take place?", a: "The main event takes place on May 9, 2026" },
            { q: "Is the event open for beginners?", a: "Absolutely. It brings together students, developers, professionals, government regulators, and enterprise leaders" },
            { q: "What is the overall impact target for Bali Blockchain Weeks", a: "The program aims to drastically build the local ecosystem by producing over 1,500 ready-to-hire certified developers and incubating 50+ new startups." },
        ]
    },
    {
        category: "Tickets",
        questions: [
            { q: "How can I purchase tickets?", a: "Tickets can be purchased directly through our website in ticketing section" },
            { q: "What types of tickets are available?", a: "standard Conference Passes and VIP Networking Passes." },
        ]
    },
    {
        category: "Sponsorship & Marketing",
        questions: [
            { q: "Do sponsors get speaking opportunities?", a: "Yes, all tiers include main stage speaking slots. The Co-Host package includes 2 Keynote slots, 2 Panel Discussion slots, and a priority speaking role during the Opening Ceremony." },
            { q: "Are there custom marketing packages?", a: "Yes, our team can tailor a package that fits your specific brand goals and target audience during the event" },
        ]
    },
    {
        category: "Program & Agenda",
        questions: [
            { q: "What are the main pillars of the Bali Blockchain Weeks program?", a: "The program is built on three integrated pillars: Literacy (a National Campus Roadshow), Training (a Developer & Workforce Program), and the culminating National Conference." },
            { q: "What will the technical training track cover for developers?", a: "The technical track focuses heavily on dApp development—including full-stack decentralized application building using Solidity/Rust, Web3.js integration, and frontend connectivity—alongside smart contract security topics like auditing basics and secure coding standards." },
        ]
    },
    {
        category: "Partnerships",
        questions: [
            { q: "How do I apply as a Community Partner?", a: "We love collaborating with local and global communities. Fill out the partnership form on our website to get started." },
            { q: "Are there opportunities to partner with local educational institutions?", a: "Yes, the National Campus Roadshow pillar is specifically designed to partner with 10+ campuses across the region to deliver literacy seminars, socialize policy, and map potential developer talent" },
        ]
    }
];


export const plans = [
    {
        id: "0",
        title: "General Pass",
        price: 50,
        caption: "Entry level access",
        features: [
            "Entrance ticket",
            "F & B",
            "Conference zone",
            "Exibition zone",
        ],
        logo: "/logo.png",
    },
    {
        id: "1",
        title: "VIP Pass",
        price: 500,
        caption: "Maximum exclusivity",
        features: [
            "Fast lane registration",
            "All benefit general pass",
            "VIP ZONE",
            "VIP Networking",
            "Dedicate concierge",
        ],
        logo: "/logo.png",
    },
    {
        id: "2",
        title: "General Pass",
        price: 50,
        caption: "Entry level access",
        features: [
            "Entrance ticket",
            "F & B",
            "Conference zone",
            "Exibition zone",
        ],
        logo: "/logo.png",
    },
];