import React from "react";
import "./ExhibitionList.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const ExhibitionList = props => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345
    },
    media: {
      height: 140
    }
  });

  const classes = useStyles();

  return (
    <>
      <h1 className="exhibition-list__heading">Афиша выставок</h1>
      <ul className="exhibition-list">
        <li className="exhibition-list__item">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://muzei-mira.com/templates/museum/images/paint/devyatyy-val-ayvazovskiy+.jpg"
                title="painting"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Выставка И.К. Айвазовского
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Выставка пройдет с 18 по 25 марта в Харьковском Национальном
                  Театре Оперы и Балета. Вход свободный, ждем Вас!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </li>
        <li className="exhibition-list__item">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl8cXIGAwmjVTZI9B88hhybAb4X1SppnloO1CPlxnfyIlk6HSq"
                title="painting"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Выставка современных художников
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Выставка пройдет с 18 по 25 марта в Харьковском Национальном
                  Театре Оперы и Балета. Вход свободный, ждем Вас!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </li>
        <li className="exhibition-list__item">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQzBIb-7iP_Xbf2OrNoXNvPZX6lcau7h4ALCwgdzyPa82dtXykU"
                title="painting"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Выставка И.К. Айвазовского
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Выставка пройдет с 18 по 25 марта в Харьковском Национальном
                  Театре Оперы и Балета. Вход свободный, ждем Вас!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </li>
        <li className="exhibition-list__item">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGcS_4WFfi_-WrKMxstEDQhucPGFVku2whPzke5xVobt5eVeKU"
                title="painting"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Выставка И.К. Айвазовского
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Выставка пройдет с 18 по 25 марта в Харьковском Национальном
                  Театре Оперы и Балета. Вход свободный, ждем Вас!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </li>
      </ul>
    </>
  );
};

export default ExhibitionList;
