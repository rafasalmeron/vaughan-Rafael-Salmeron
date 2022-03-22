import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import ComentsCard from "../ComentsCard/ComentsCard";
import useProtectedPage from "../../hooks/useProtectedPage";
import { ConteinerComent } from "./styled";
import Loading from "../Loading/Loading";


const PostComents = ({coments}) => {
  useProtectedPage();

  console.log('COMENTARIO:', coments);
  const allComents = coments.map((coment) => {
    return (
      <ConteinerComent  key={coment.id}>
        <ComentsCard         
          name={coment.username}
          title={`Enviado por ${coment.username}`}
          body={coment.body}
          subheader={coment.createdAt}
          id={coment.id}
        >
          <CardContent>
            <Typography body="body" variant="body2" color="secondary">
              {coment.body}
            </Typography>
          </CardContent>
        </ComentsCard>
      </ConteinerComent>
    );
  });
  return <div>
  {allComents.length > 0 ? allComents : allComents.lenght = 0 ? <Loading /> : <p>sem comentários</p> }
</div>;
  
};

export default PostComents;
