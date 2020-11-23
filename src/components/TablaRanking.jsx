import React, { Fragment } from "react";
import { nanoid } from "nanoid";
const TablaRanking = ({ ranking }) => {
  return (
    <Fragment>
      <h4>Ranking</h4>
      <table className="table table-bordered transicion">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Tiempo</th>
            <th>Respuestas</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((rank, index) => {
            if (index > 4) return null;

            return (
              <tr key={nanoid()}>
                <th>{index + 1}</th>
                <td>{rank[0]}</td>
                <td>{rank[1]}</td>
                <td>{rank[2]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default TablaRanking;
