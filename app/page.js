import TopicPreviews from '@/components/TopicPreviews';

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="container mx-auto md:px-20 py-5"><TopicPreviews/></div>
      </main>
    </div>
  );
}
