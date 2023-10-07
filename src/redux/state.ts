import {rerenderMyApp} from "../render";

export type MessagesDataType = {
    id: number
    message: string
    // addPostCallback: (postText: string) => void
}

export type DialogsDataType = {
    id: number
    name: string
}

export type PostsDataType = {
    id: number
    message: string | undefined
    likesCount: number
}

export type ProfilePageType = {
    postsData: PostsDataType[]
}

export type DialogsPageType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}

export type SidebarItemsType = {
    id: number
    title: string
    link: string
}

export type SidebarType = {
    sidebarItems: SidebarItemsType[]
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

const state: RootStateType = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi? how are you?', likesCount: 12},
            {id: 2, message: 'Are you work today?', likesCount: 5},
            {id: 3, message: 'Are you work today?', likesCount: 5},
            {id: 4, message: 'Are you work today?', likesCount: 5},
        ],
    },
    dialogsPage: {
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'I am fine!'},
            {id: 4, message: 'Fuck you'},
        ],
        dialogsData: [
            {id: 1, name: 'Vika'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Diana'},
            {id: 4, name: 'Nika'},
        ],
    },
    sidebar: {
        sidebarItems: [
            {
                id: 1,
                title: 'Profile',
                link: '/profile'
            },
            {
                id: 2,
                title: 'Messages',
                link: '/messages'
            },
            {
                id: 3,
                title: 'News',
                link: '/news'
            },
            {
                id: 4,
                title: 'Music',
                link: '/music'
            },
            {
                id: 5,
                title: 'Settings',
                link: '/settings'
            },
        ]
    }
}
console.log(state.profilePage.postsData)
// export const addPost = (postText: string) => {
//     const newPost: PostsDataType = {
//         id: new Date().getTime(),
//         message: postText,
//         likesCount: 0
//     }
// }

export const alertFoo = (text: string) => {
    const newPost: PostsDataType = {
        id: state.profilePage.postsData.length + 1,
        message: text,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost)
    rerenderMyApp(state)
}

export default state