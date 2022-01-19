import type { NextPage } from 'next';
import tw from 'tailwind-styled-components';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Text>TailWind Styled Init</Text>
    </Wrapper>
  );
};

export default Home;

const Wrapper = tw.div`
  flex
  flex-col
  justify-center
  items-center
  h-full
  bg-slate-300
  text-black
  selection:bg-transparent
`;

const Text = tw.p`
  font-bold
  text-xl
  cursor-default
`;
