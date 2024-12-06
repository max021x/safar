'use client';

import React from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Toolbar, Container, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Link from "next/link";
import Footer from '@/components/Homepage/Footer';
import {images , cities} from '@/components/Tour/list_database';

const cards = Array.from(Array(10).keys())

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#fff',
  },

  icon: {
    marginRight: '20px',
  },

  buttons: {
    marginTop: '40px',
  },

  cardGrid: {
    padding: '20px 0'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: '1',
  },

  font_1rem: {
    fontFamily: 'Vazirmatn',
    fontSize: '1rem',
  },
  font_1$5rem: {
    fontFamily: 'Varimatn',
    fontSize: '1.5rem',
  }
}));


const List = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <main>
        <div className={classes.container}>
          <Container maxWidth='sm' sx={{ marginTop: '100px' }}>
            <Typography sx={{
              fontFamily: 'Vazirmatn',
              fontSize: '2rem',
              fontWeight: '700',
              color: 'orange',
            }} variant="h2" align="center" color="info" gutterBottom>
              تور های گردشگری سفرماکت
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {
              cards.map((key) => (
                <Grid item key={key} xs={12} sm={6} md={4}>
                  <Link href={'/Tour/'+cities[key].id}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={images[key]}
                        title="Image titel"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" sx={{
                          fontFamily: 'Vazirmatn',
                          fontSize: '1.5rem',
                          textAlign: 'right',
                        }}>
                          {
                            Object.keys(cities[key]).find((item) => item !== 'id')
                          }
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: 'Vazirmatn',
                            fontSize: '.9rem',
                            textAlign: 'right',

                          }}>
                          {
                            Object.values(cities[key]).find((val, index) => index !== 0)
                          }
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small"
                          sx={{
                            padding: '0 10px',
                            bgcolor: 'orange',
                            color: '#fff',
                            fontFamily: 'Vazirmatn'
                          }}

                        >بزن روش عشق کنیم</Button>
                      </CardActions>
                    </Card>
                  </Link>
                </Grid>
              ))
            }
          </Grid>
        </Container>
      </main>
      <Footer/>
    </>
  )
}
export default List;