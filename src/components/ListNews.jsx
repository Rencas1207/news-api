import { Grid, Typography } from '@mui/material'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useNews from '../hooks/useNews'
import New from './New';

const ListNews = () => {
   const { news, totalNews, handleChangePage, page } = useNews();

   const totalPages = Math.ceil(totalNews / 20);
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

         <Stack
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
               marginY: 5
            }}
         >
            <Pagination
               count={totalPages}
               color="primary"
               onChange={handleChangePage}
               page={page}
            />
         </Stack>
      </>
   )
}

export default ListNews