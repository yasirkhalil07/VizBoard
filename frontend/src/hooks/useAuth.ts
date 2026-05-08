import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState, AppDispatch } from "@/store/store";
import {
  loginThunk,
  logoutThunk,
  refreshTokenThunk,
} from "@/store/thunks/authThunks";

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const { user, accessToken, isAuthenticated, loading, error, initialized } =
    useSelector((state: RootState) => state.auth);

  const login = async (email: string, password: string) => {
    try {
      const result = await dispatch(loginThunk({ email, password })).unwrap();
      return result;
    } catch (error: any) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await dispatch(logoutThunk()).unwrap();
      router.push("/auth/login");
    } catch (error: any) {
      console.error("Logout failed:", error);
      // Force logout even if API call fails
      router.push("/auth/login");
    }
  };

  const refreshToken = async () => {
    try {
      const result = await dispatch(refreshTokenThunk()).unwrap();
      return result;
    } catch (error: any) {
      console.error("Token refresh failed:", error);
      throw error;
    }
  };

  const getAccessToken = () => accessToken;

  return {
    user,
    accessToken,
    isAuthenticated,
    loading,
    error,
    initialized,
    login,
    logout,
    refreshToken,
    getAccessToken,
  };
};
