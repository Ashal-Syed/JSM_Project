import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({ searchParams }: {
    searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: "Yesterday",
      Views: 55,
      author: { _id: 1 },
      _id : 1,
      description: "This is a description",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=2432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "We Robots"
    }];


  return (
     <>
      <section className="pink_container">

        <h1 className="heading">Pitch Your Startup <br/> Connect With Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">
            Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competitions
        </p>

        <SearchForm query={query}/>

      </section>

      <section className="section_container"> 
        <p className="text-30-semibold">
          {query? `Search Results for "${query}"` : 'All Startups'}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post}  />
          ))
          ) : (
           <p className="no-results">No Startups Found</p> 
          )}

        </ul>
      </section>

      <div className="bg-blue-500 text-white p-5">
        If you see this, Tailwind is working!
      </div>

        
     </>
  );
}
