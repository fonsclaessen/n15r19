import { create } from "zustand";
import { fetchUserDataTracker } from "./trackerService";

interface User {
  id: number;
  userId: number;
  userName: string;
  Pw: string;
  userNickname: string;
  userEmail: string;
}

export interface StateTracker {
  user: User | null;
  fetchUserTracker: (userId: number) => Promise<void>;
}

const useStoreTracker = create<StateTracker>((set) => ({
  user: null,
  fetchUserTracker: async (userId: number) => {
    try {
      const userData = await fetchUserDataTracker(userId);
      set({ user: userData });
      console.log("trackerStore.ts response.data", userData.data);
    } catch (error) {
      console.error("Error fetching user data grrr:", error);
    }
  },
}));

export default useStoreTracker;
