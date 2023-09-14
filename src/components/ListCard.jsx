/* eslint-disable react/prop-types */

import Card from "./Card";

const ListCard = ({ refacciones }) => {
    console.log("Total de lista de refacciones",refacciones);
  return (
    <>
      {refacciones && refacciones.length ? (
        <>
          {refacciones.map((item) => {
            return (
              <>
                <Card key={item.id} item={item} />
              </>
            );
          })}
        </>
      ) : null}
    </>
  );
};

export default ListCard;
