const initialState = {
    articles: [
        {
            id: 1,
            title: 'React on my mind',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            articleUrl: 'https://youtube.com/helloroman',
            created: '1 day',
        },
        {
            id: 2,
            title: 'Wish you React',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            articleUrl: 'https://youtube.com/helloroman',
            created: '1 day',
        },
        {
            id: 3,
            title: 'You gave React a bad name',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            articleUrl: 'https://youtube.com/helloroman',
            created: '5 days',
        },
        {
            id: 4,
            title: 'Is it React you looking for?',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '10 days',
        },
    ],
    notes: [
        {
            id: 1,
            title: 'React on my mind',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '1 day',
        },
        {
            id: 2,
            title: 'Wish you React',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '1 day',
        },
        {
            id: 3,
            title: 'You gave React a bad name',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '5 days',
        },
        {
            id: 4,
            title: 'Is it React you looking for?',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            created: '10 days',
        },
    ],
    twitters: [
        {
            id: 1,
            name: 'Dan Abramov',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
            twitterImg:
                'https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/032/medium/oapgW_Fp_400x400.jpg',
            created: '1 day',
        },
    ],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REMOVE_ITEM':
            return {
                ...state,
                [action.payload.itemType]: [
                    ...state[action.payload.itemType].filter(item => item.id !== action.payload.id),
                ],
            };
        default:
            return state;
    }
};

export default rootReducer;
