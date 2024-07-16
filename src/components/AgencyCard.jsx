const AgencyCard = ({ img, className }) => {
  return (
    <div className={`card h-[300px] w-[50%] ${className}`}>
      <figure className="rounded-2xl shadow-xl h-[100%]">
        <img
          src={img}
          alt="Location Image"
          className="object-cover w-full h-full"
        />
      </figure>
    </div>
  );
};
export default AgencyCard;
