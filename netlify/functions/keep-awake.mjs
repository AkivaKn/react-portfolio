// Scheduled function: pings the career chatbot Space every 6 hours so it
// never hits HuggingFace's 48-hour inactivity sleep.
export default async () => {
  const res = await fetch("https://akivakauf-career-agent.hf.space/");
  console.log("keep-awake ping:", res.status);
  return new Response("awake", { status: 200 });
};

export const config = {
  schedule: "0 */6 * * *",
};
