/* eslint-disable react/prop-types */

import Card from "./Card";

const ListCard = ({ refacciones }) => {
    // console.log("Total de lista de refacciones",refacciones);
  return (
    <>
      {refacciones && refacciones.length ? (
        <>
          {refacciones.map((item) => {
            return (
              <>
                <Card item={item} />
              </>
            );
          })}
        </>
      ) : null}
    </>
  );
};

export default ListCard;
