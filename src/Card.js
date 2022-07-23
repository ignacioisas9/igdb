const Card = (props) => {
  let display;
  if (props.games) {
    display = props.games.map((x) => {
      return (
        <div
          key={x.id}
          className="card card-compact bg-base-100 shadow-2xl font-serif rounded-xl"
          style={{ flex: "0 0 320px" }}
        >
          <figure className="overflow-hidden">
            <img src={x.background_image} alt="" className="h-40 w-80"/>
          </figure>
          <div className="card-body bg-white text-black">
            <h2 className="text-2xl pb-5 text-blue-600">{x.name}</h2>
            <h2 className="text-lg">Punctuation: {x.metacritic}</h2>
          </div>
        </div>
      );
    });
  } else {
    display = "No se encontraron los juegos";
  }
  return display;
};

export default Card;
