import { Root } from '@DTOS';
import { api } from '@libs';
import { useQuery } from '@tanstack/react-query';

interface QueryProps {
  id: number;
}

export function useAppQuery({ id }: QueryProps) {
  const { data, isFetching } = useQuery({
    queryKey: ['billCard', id],
    queryFn: () => api.get<Root>(`/Clientes/${id}`),
  });

  return {
    result: data?.data,
    isLoading: isFetching,
  };
}
