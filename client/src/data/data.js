// Define service categories with their respective services
export const serviceCategories = [
    {
        _id: "0000",
        name: 'Haircuts',
        categoryImage: '/images/Haircuts.jpg',
        services: [
            {
                _id: "0001",
                name: 'Buzz Cut',
                price: '$20',
                description: 'Clipper cut, 1 length',
            },
            {
                _id: "0002",
                name: 'Classic Fade',
                price: '$30',
                description: 'Fade where you want + 1 length everywhere else',
            },
            {
                _id: "0003",
                name: 'Classic Haircut',
                price: '$50',
                description: 'Tell us how you want it',
            },
        ],
    },
    {
        _id: "0004",
        name: 'Shaves & Beard Trims',
        categoryImage: '/images/BeardTrim.jpg',
        services: [
            {
                _id: "0005",
                name: 'Close Shave',
                price: '$15',
                description: 'Straight razor, hot towel, baby face',
            },
            {
                _id: "0006",
                name: 'Shape Up',
                price: '$13',
                description: 'We shape up your beard just how you like it',
            },
        ],
    },
];


export const providers = [
    {
        _id: 'Any',
        name: 'Any Provider',
        profilePicture: '/images/AnyProvider.png'
        },
    {
        name: 'Memphis',
        profilePicture: '/images/Memphis.jpg'
    },
    {
        name: 'Emy',
        profilePicture: '/images/Emy.jpg'
    },
];
