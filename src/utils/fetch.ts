import { ID, PASSWORD } from '@src/constants/system';

import { generateBasicToken } from './auth';

interface FetchWithTokenParameter {
  url: string;
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  body?: BodyInit;
}

export async function fetchWithToken({ url, method, body }: FetchWithTokenParameter) {
  const token = generateBasicToken(ID, PASSWORD);
  const response = await fetch(url, {
    method,
    body,
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response;
}
