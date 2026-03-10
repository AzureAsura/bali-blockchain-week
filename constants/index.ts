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
    image: `/gallery/img${i + 1}.jpg`,
}));

export const getInvolvedCard = [
    {
        title: "JOIN AS AN ATTENDEE",
        description: "Network with industry leaders and gain exclusive global insights.",
        buttonText: "Get Tickets",
        image: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=600&auto=format&fit=crop',
    },
    {
        title: "BECOME A SPONSOR",
        description: "Scale your brand visibility and connect with a premium audience.",
        buttonText: "Request Prospectus",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=600&auto=format&fit=crop",
    },
    {
        title: "PARTNER AS MEDIA",
        description: "Access exclusive press materials and cover groundbreaking news.",
        buttonText: "Apply Now",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=600&auto=format&fit=crop",
    },
    {
        title: "BECOME AN AFFILIATE",
        description: "Promote the world's top event and earn high-tier commissions.",
        buttonText: "Join Now",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop"
    },
];


export const faqData = [
    {
        category: "General",
        questions: [
            { q: "What is Bali Blockchain Weeks?", a: "Bali Blockchain Weeks is a premium series of events, workshops, and networking sessions bringing together global Web3 innovators to the heart of Indonesia." },
            { q: "When and where will the event take place?", a: "The main event is scheduled for 2026, held across various premium venues in South Denpasar, Bali." },
            { q: "Is the event open for beginners?", a: "Absolutely. While we host technical sessions, there are plenty of introductory tracks and networking opportunities for those new to the space." },
        ]
    },
    {
        category: "Tickets",
        questions: [
            { q: "How can I purchase tickets?", a: "Tickets can be purchased directly through our official website using both fiat and selected cryptocurrencies." },
            { q: "Are there Early Bird discounts?", a: "Yes, we offer limited Early Bird tickets. Follow our social media to get the announcement as soon as they drop." },
            { q: "Can I upgrade my ticket later?", a: "Ticket upgrades are possible depending on availability. Please reach out to our support team for assistance." },
        ]
    },
    {
        category: "Sponsorship & Marketing",
        questions: [
            { q: "How can my brand get featured?", a: "We offer various tiers of sponsorship from booth placements to speaking slots. Request our prospectus through the 'Get Involved' section." },
            { q: "Are there custom marketing packages?", a: "Yes, our team can tailor a package that fits your specific brand goals and target audience during the event." },
        ]
    },
    {
        category: "Program & Agenda",
        questions: [
            { q: "What topics will be covered?", a: "The agenda focuses on DeFi, Infrastructure, RWA (Real World Assets), and the future of the Web3 ecosystem in Southeast Asia." },
            { q: "When will the full speaker lineup be announced?", a: "We announce speakers in phases. The full agenda will be finalized and published one month before the event." },
        ]
    },
    {
        category: "Partnerships",
        questions: [
            { q: "How do I apply as a Community Partner?", a: "We love collaborating with local and global communities. Fill out the partnership form on our website to get started." },
            { q: "What are the benefits of being a Media Partner?", a: "Media partners receive exclusive press access, interview opportunities with keynote speakers, and VIP lounge access." },
        ]
    }
];