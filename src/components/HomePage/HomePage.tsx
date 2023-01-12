import moment from "moment";
import React from 'react';
import { Article } from '../../types/types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Highlighter from "react-highlight-words";
import Icon from '@mui/material/Icon';

interface Props {
  inputBlog: string[];
  articles: Article[];
  setSelectedObj: (status: Article) => void
}
export const HomePage: React.FC<Props> = ({ setSelectedObj, articles, inputBlog }) => {

  return (
    <>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '45px'
        }}>
        {articles.map(article => (
          <Card key={article.id} sx={{
            width: 400,
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
            borderRadius: "5px",
            border: "1px solid #EAEAEA"
          }}>
            <CardMedia
              component="img"
              height="217"
              image={article.imageUrl}
              alt={article.title}
              sx={{ mb: 1 }}
            />
            <CardContent>
              <Typography sx={{
                mb: 1.5,
                opacity: 0.6,
                fontFamily: "Montserrat"
                }}>
                <Icon sx={{
                  pr: 0.5,
                  position: "relative",
                  top: "5px"
                  }} aria-label="CalendarTodayOutlined">
                  <CalendarTodayOutlinedIcon />
                </Icon>
                {moment(article.publishedAt).format('MMMM Do, YYYY')}
              </Typography>
              
              <Typography sx={{
                mb: 2.5,
                fontFamily: "Montserrat"
                }} variant="h5" component="div">
                <Highlighter
                  searchWords={inputBlog}
                  autoEscape={true}
                  textToHighlight={article.title}
                />
              </Typography>

              <Typography sx={{
                fontFamily: "Montserrat",
                fontSize: "16px",
                textOverflow: "ellipsis",
                overflow: "hidden", }} variant="body1">
                <Highlighter
                  searchWords={inputBlog}
                  autoEscape={true}
                  textToHighlight={article.summary}
                />
              </Typography>
              <CardActions sx={{ padding: 0, marginTop: "20px" }} >
                <Button
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    color: "#363636",
                    fontSize: "16px",
                    textTransform: "none",
                    padding: 0
                  }}
                  color="primary"
                  href="#readmore"
                  size="small"
                  onClick={() => { setSelectedObj(article) }}
                >
                  Read more
                  <Icon sx={{
                    pl: 0.5,
                    position: "relative",
                    top: "-5px"
                    }}>
                    <ArrowForwardIcon />
                  </Icon>
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
}
