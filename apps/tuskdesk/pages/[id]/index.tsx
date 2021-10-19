import { GetStaticPaths, GetStaticProps } from 'next';

export type IdProps = {
  fuga: string;
};

function Id({ fuga }: IdProps) {
  return <div>{fuga}</div>;
}

export const getStaticProps: GetStaticProps<IdProps> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const { id } = params;

  if (typeof id !== 'string') {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      fuga: id,
    },
  };
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
    fallback: true,
    paths: ['hoge', 'fuga', 'piyo'].map((value) => ({
      params: {
        id: value,
      },
    })),
  };
};

export default Id;
