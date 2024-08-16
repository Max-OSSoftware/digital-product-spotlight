interface IPricingCard {
    price: number;
    title: string;
    benefits: string[];
    id: number;
    oneliner: string;
}

const pricingCards: IPricingCard[] = [
    {
        price: 19,
        title: "Starter",
        benefits: [
            "Basic AI-powered lead scoring",
            "Automated content suggestions",
            "Standard messaging templates",
            "Basic customer analytics",
            "Email support",
        ],
        id: 1,
        oneliner: "Get started with essential AI tools for your sales team"
    },
    {
        price: 29,
        title: "Pro",
        benefits: [
            "Advanced lead scoring algorithms",
            "Enhanced content creation tools",
            "Personalized messaging at scale",
            "Advanced customer retention tools",
            "Priority email support",
        ],
        id: 2,
        oneliner: "Boost your sales with advanced AI capabilities"
    },
    {
        price: 79,
        title: "Enterprise",
        benefits: [
            "All Pro features, plus:",
            "Data-driven sales recommendations",
            "Customizable sales workflows",
            "Real-time alerts and notifications",
            "Dedicated account manager",
        ],
        id: 3,
        oneliner: "Optimize and scale your sales operations with enterprise-grade AI"
    },
    {
        price: 149,
        title: "Ultimate",
        benefits: [
            "All Enterprise features, plus:",
            "Full API access",
            "Priority support",
            "Exclusive AI model customizations",
            "Advanced security features",
        ],
        id: 4,
        oneliner: "Unlock the full potential of AI with our most comprehensive plan"
    },
]

export default pricingCards;
