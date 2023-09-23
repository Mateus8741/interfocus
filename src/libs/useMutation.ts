import { useNavigation } from '@react-navigation/native';
import { useToastService } from '@services';
import { useMutation } from '@tanstack/react-query';
import { api } from './api';

interface UseMutationQueryProps {
  endPoint: string;
  body: number;
}

export function useMutationQuery({ endPoint, body }: UseMutationQueryProps) {
  const { navigate } = useNavigation();
  const { showToast } = useToastService();

  const { mutate, isLoading } = useMutation({
    mutationFn: async () =>
      api.put(endPoint, {
        dividaId: body,
      }),
    retry: false,
    onSuccess: () => {
      navigate('ClientScreen');
      showToast({
        type: 'success',
        message: 'Divida paga com sucesso!',
      });
    },
  });

  return {
    isLoading,
    mutate,
  };
}
