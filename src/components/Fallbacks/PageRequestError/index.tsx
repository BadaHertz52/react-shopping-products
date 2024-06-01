import style from './style.module.css';

interface PageRequestProps {
  error: Error;
}

function PageRequest({ error }: PageRequestProps) {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <section className={style.fallback}>
      <p className={style.fallbackHeader}>⚠️ 오류</p>
      <p className={style.fallbackP}>오류가 발생했어요.😥</p>
      <p className={style.fallbackP}>오류: {error.message}</p>
      <button className={style.fallbackRefresh} onClick={handleRefresh}>
        새로고침
      </button>
    </section>
  );
}

export default PageRequest;
