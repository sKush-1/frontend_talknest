type ChatGroupType = {
    id: string,
    user_id: number,
    title: string,
    passcode: string,
    created_at: string,
}

type GroupChatUserType = {
    id: number;
    name: string;
    group_id: string;
    created_at: string;
}

type MessageType = {
    id: string;
    name: string;
    group_id: string;
    message: string;
    created_at: string;
}