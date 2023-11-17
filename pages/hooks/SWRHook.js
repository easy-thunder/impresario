import useSWR from 'swr';

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

function fetchUser (email){
  const { data, error } = useSWR(`/api/Messaging?email=${email}`, fetcher);

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Data for {email}:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default fetchUser;