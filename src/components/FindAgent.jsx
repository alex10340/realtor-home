import FindAgentImg from "../assets/findagent.jpg";

const FindAgent = () => {
  return (
    <div className="sm:py-20 px-[12px] mx-auto max-w-[1350px]">
      <div className="flex">
        <div className="hidden sm:block w-[40vw] max-w-[600px] m-[10px]">
          <figure className="overflow-hidden aspect-[12/16] rounded-2xl shadow-xl -rotate-1">
            <img src={FindAgentImg} alt="Find agent" />
          </figure>
        </div>
        <div className="px-10 py-10 sm:w-[60vw]">
          <h2 className="text-4xl font-bold">
            Find your agent{" "}
            <span className="underline text-neutral">today</span>
          </h2>
          <div className="py-5 opacity-85">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            eveniet sed in cupiditate sit tempore vel! Accusamus, aspernatur
            nihil? Eos laudantium quisquam, id esse voluptatum placeat unde
            laborum eius voluptatibus amet tenetur ad saepe? Est voluptatem
            veritatis aspernatur corrupti placeat?
          </div>
        </div>
      </div>
    </div>
  );
};
export default FindAgent;
