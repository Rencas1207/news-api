import { Grid, Typography } from '@mui/material'
import useNews from '../hooks/useNews'
import New from './New';

const ListNews = () => {
   const { news } = useNews();

   return (
      <>
         <Typography
            textAlign="center"
            marginY={5}
            variant="h3"
            component="h2"
         >Últimas noticias</Typography>

         <Grid
            container
            spacing={3}
         >
            {
               news.map(notice => (
                  <New key={notice.url} notice={notice} />
               ))}
         </Grid>
      </>
   )
}

export default ListNews