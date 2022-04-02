import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import ComentsCard from "../ComentsCard/ComentsCard";
import useProtectedPage from "../../hooks/useProtectedPage";
import { ConteinerComent } from "./styled";
import Loading from "../Loading/Loading";


const PostComents = ({coments}) => {
  useProtectedPage();

  
  const allComents = coments.map((coment) => {
    console.log('COMENTARIO:', coment);
    return (
      <ConteinerComent  key={coment.id}>
        <ComentsCard         
          coment={coment}
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
