interface UserProps {
    id: string,
    avatar: string;
    name: string;
    width?: number,
    active?: boolean
}

interface UserAvatarProps {
    user: UserProps,
    width?: number
}

interface userMessage {
    target: string,
    time: string,
    text: string
}