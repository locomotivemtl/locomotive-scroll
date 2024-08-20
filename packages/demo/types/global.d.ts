type Seo = {
    title?: string;
    description?: string;
    social?: {
        facebook?: {
            title?: string;
            image?: {
                url?: string;
            };
            description?: string;
        };
        twitter?: {
            creator?: string;
            title?: string;
            image?: {
                url?: string;
            };
            description?: string;
        };
    },
    advanced?: {
        robots?: string[];
        canonical?: string;
    };
};