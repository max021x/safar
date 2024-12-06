'use client';

import React from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Toolbar, Container, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Link from "next/link";
import Footer from '@/components/Homepage/Footer';

const cities = [
  { 'id': 1, "تهران": "پایتخت ایران با برج میلاد و مجموعه سعدآباد یکی از مقصدهای اصلی گردشگری ایران است." },
  { 'id': 2, "اصفهان": "اصفهان با میدان نقش جهان و پل خواجو به نصف جهان معروف است." },
  { 'id': 3, "شیراز": "شیراز با باغ‌های زیبا و آرامگاه حافظ و سعدی، شهر عشق و شعر است." },
  { 'id': 4, "مشهد": "مشهد با حرم امام رضا (ع) یکی از مهمترین مقاصد زیارتی ایران است." },
  { 'id': 5, "تبریز": "تبریز با بازار بزرگ و تاریخی و پارک ائل‌گلی یکی از مقاصد محبوب گردشگری است." },
  { 'id': 6, "یزد": "یزد با معماری خشتی و بادگیرهای خود، شهر تاریخی و زیباست." },
  { 'id': 7, "کیش": "جزیره کیش با سواحل زیبای خود مقصدی محبوب برای تفریح و گردشگری است." },
  { 'id': 8, "قم": "قم با حرم حضرت معصومه (س) یکی از مهمترین شهرهای مذهبی ایران است." },
  { 'id': 9, "کاشان": "کاشان با باغ فین و خانه‌های تاریخی خود یکی از مقاصد زیبا و تاریخی ایران است." },
  { 'id': 10, "همدان": "همدان با آرامگاه بوعلی سینا و غار علیصدر یکی از شهرهای تاریخی و زیباست." },
  { 'id': 11, "کرمان": "کرمان با باغ شاهزاده ماهان و ارگ بم یکی از مقاصد دیدنی ایران است." },
  { 'id': 12, "رشت": "رشت با سواحل زیبای دریای خزر و طبیعت سرسبز خود، مقصدی زیبا برای طبیعت‌گردی است." },
]

const images = [
  'http://localhost/images/list_cities/tehran.jpg',
  'http://localhost/images/list_cities/esfahan.jpg',
  'http://localhost/images/list_cities/shiraz.webp',
  'http://localhost/images/list_cities/mashhad.jpg',
  'http://localhost/images/list_cities/tabriz.jpg',
  'http://localhost/images/list_cities/yazd.jpg',
  'http://localhost/images/list_cities/kish.webp',
  'http://localhost/images/list_cities/qom.webp',
  'http://localhost/images/list_cities/kashan.jpg',
  'http://localhost/images/list_cities/hamedan.jpg',
  'http://localhost/images/list_cities/kerman.jpg',
  'http://localhost/images/list_cities/rasht.webp',
]

const text = '';

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