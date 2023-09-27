type MessagesDataType = {
    id: number
    message: string
    // addPostCallback: (postText: string) => void
}

type DialogsDataType = {
    id: number
    name: string
}

export type PostsDataType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    postsData: PostsDataType[]
}

type DialogsPageType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}

type SidebarType = {}

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
    sidebar: {}
}

// export const addPost = (postText: string) => {
//     const newPost: PostsDataType = {
//         id: new Date().getTime(),
//         message: postText,
//         likesCount: 0
//     }
// }

export default state