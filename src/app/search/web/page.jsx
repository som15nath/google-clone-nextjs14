

export default async function WebSearchPage() {
 
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}s&
      cx= ${process.env.CONTEXT_KEY}&q=lectures`
    );

    const data = await response.json();
    console.log(data);

    const results = data.items;
  
  return 
    <>{results && results.map((result) =><h1>{result.title}</h1>)}</>;
  
};
