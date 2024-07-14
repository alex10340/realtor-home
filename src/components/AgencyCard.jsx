const AgencyCard = ({ img, className }) => {
  return (
    <div className={`card max-h-[300px] w-[50%] ${className}`}>
      <figure className="rounded-2xl shadow-xl">
        <img src={img} alt="Location Image" />
      </figure>
    </div>
  );
};
export default AgencyCard;
