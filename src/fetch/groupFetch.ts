import { GROUP_CHAT_URL, GROUP_CHAT_USERS_URL } from "@/lib/apiEndPoints";

export async function fetchChatGroups(token: string) {
  try {
    const res: any = await fetch(GROUP_CHAT_URL, {
      headers: {
        Authorization: token,
      },
      next: {
        revalidate: 60 * 60,
        tags: ["dashboard"],
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    const response = await res.json();
    return response.groups;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function fetchChatGroup(id: string) {
  try {
    const res = await fetch(`${GROUP_CHAT_URL}/${id}`, {
      cache: "no-cache",
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const response = await res.json();
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function fetchChatUsers(id: string) {
  try {
    const res = await fetch(`${GROUP_CHAT_USERS_URL}?group_id=${id}`, {
      cache: "no-cache",
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const response = await res.json();
    return response.data;
  } catch (error) {
    return [];
  }
}

