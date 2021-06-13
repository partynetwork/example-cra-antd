import useSWR from 'swr';
import axios from 'axios';
import { UserInterface } from '../types/user';

const userFetcher = async (): Promise<UserInterface> => {
  try {
    const { data } = await axios.get('/api/users/me');
    return data;
  } catch (e) {
    throw e;
  }
};
export default function useUser() {
  const { data, mutate, error } = useSWR('api_user', userFetcher);
  const loading = !data && !error;
  return {
    loading,
    error: error?.response || undefined,
    user: data,
    isAuthentication: !!data,
    mutate,
  };
}
