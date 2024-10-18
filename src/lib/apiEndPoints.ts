import Env from "./env";

export const Base_URL = Env.BACKEND_URL;
export const API_URL = Base_URL + "/api";
export const LOGIN_URL = API_URL + "/auth/login";
export const GROUP_CHAT_URL = API_URL + "/chat-group";
export const GROUP_CHAT_USERS_URL = API_URL + "/chat-group-users";
export const CHATS_URL = API_URL + "/chats";





