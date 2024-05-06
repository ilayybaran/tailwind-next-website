import Hero from '@/components/Hero';
import Image from "next/image";
import Main from '@/components/Main';
import Proposal from '@/components/Proposal';

export default function Home() {
  return (
    <main>
      <Hero />
      <Main />
      <Proposal />
    </main>
      
  );
}
