import React from 'react';
import { Article } from '../../types/types';
import './DetailsPage.scss'

import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Icon } from '@mui/material';

interface Props {
  details: Article;
  setSelectedObj: (status: null) => void;
}

export const DetailsPage: React.FC<Props> = ({ setSelectedObj, details }) => {
  const { imageUrl, title, summary } = details;

  return (
    <div className="detaile_page">
      <img
        className="detaile_page--img"
        src={imageUrl}
        alt=""
      />
      <div className="detaile_page--info">
        <h2 className="detaile_page--title">{title}</h2>
        <p className="detaile_page--summary">{summary} 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum ornare convallis non etiam tincidunt tincidunt. Non dolor vel purus id. Blandit habitasse volutpat id dolor pretium, sem iaculis. Faucibus commodo mauris enim, turpis blandit.
          Porttitor facilisi viverra mi lacus lacinia accumsan. Pellentesque gravida ligula bibendum aliquet nulla massa elit. Ac faucibus donec sit morbi pharetra urna. Vel facilisis amet placerat ultrices lobortis proin nulla. Molestie tellus sed pellentesque tortor vitae eu cras nisl. Sem facilisi amet vitae ultrices nullam tellus. Pellentesque eget iaculis morbi at quis eget lacus, aliquam etiam. Neque ipsum, placerat vel convallis nulla orci, nunc etiam. Elementum risus facilisi mauris diam amet et sed.

          At aliquet id amet, viverra a magna lorem urna. Nibh scelerisque quam quam massa amet, sollicitudin vel non. Gravida laoreet neque tincidunt eu egestas massa vitae nibh. Nec ullamcorper amet tortor, velit. Dictum pellentesque dolor sit duis sed nibh. Euismod rutrum pellentesque semper mattis aliquet ornare. Cursus maecenas massa, arcu ac adipiscing odio facilisis ac eu.
        </p>

        <Button
          sx={{
            fontFamily: "Montserrat",
            fontWeight: "bold",
            color: "#363636",
            fontSize: "16px",
            textTransform: "none",
            top: "60px",
            marginLeft: "60px"
          }}
          size="small"
          onClick={() => { setSelectedObj(null) }}
        >
          <Icon sx={{
            pl: 0.5,
            position: "relative",
            top: "-5px"
            }}>
            <ArrowBackIcon />
          </Icon>
          Back to homepage
        </Button>
      </div>
    </div>
  );
}


