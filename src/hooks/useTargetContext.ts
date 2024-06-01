import React, { useContext } from 'react';

export default function useTargetContext<T>(context: React.Context<T>) {
  const targetContext = useContext(context);
  if (!targetContext) throw new Error('modal context를 찾을 수 없습니다.');

  return targetContext;
}
