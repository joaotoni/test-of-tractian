import Header from '@/app/[lang]/who-we-serve/plant-manager/_components/header/Header';
import Benefits from './_components/Benefits';
import FAQ from './_components/Faq';
import Footer from './_components/Footer';
import FromFirst from './_components/FromFirst';
import HearIt from './_components/HearIt';
import Hero from './_components/Hero';
import MoreThanMachines from './_components/MoreThanMachines';
import PainPoints from './_components/PainPoints';
import Testimonials from './_components/Testimonials';
import DemoModal from './_components/DemoModal';

export default async function PlantManagerPage({
  params
}: {
  params: Promise<{lang: string}>;
}) {
  const {lang} = await params;

  return (
    <main className="min-h-screen">
      <Header lang={lang} />
      <Hero />
      <PainPoints />
      <Benefits />
      <Testimonials />
      <HearIt />
      <FromFirst />
      <MoreThanMachines />
      <FAQ />
      <Footer />
      <DemoModal lang={lang} />
    </main>
  );
}
