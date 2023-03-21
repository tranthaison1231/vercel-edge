export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?${req.url.split('?')[1]}`);
  const data = await response.json();
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  });
}
