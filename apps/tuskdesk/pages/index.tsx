import { GetServerSideProps } from 'next';

export type PagesProps = {
  hoge: string;
};

function Pages({ hoge }: PagesProps): JSX.Element {
  return <div>{hoge}</div>;
}

export const getServerSideProps: GetServerSideProps<PagesProps> = async () => {
  return {
    props: {
      hoge: 'hogehoge',
    },
  };
};

export default Pages;
