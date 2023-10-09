import {rerenderMyApp} from "../render";

export type MessagesDataType = {
    id: number
    message: string
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
    newTextMessage: string
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
        newTextMessage: ''
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


export const alertFoo = () => {
    const newPost: PostsDataType = {
        id: state.profilePage.postsData.length + 1,
        message: state.profilePage.newTextMessage,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost)
    rerenderMyApp(state)
    state.profilePage.newTextMessage = ''
}

export const changeTextPost = (text: string) => {
    state.profilePage.newTextMessage = text
    rerenderMyApp(state)
}

export default state