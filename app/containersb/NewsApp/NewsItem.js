import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const imgStyle = {
    height: 'auto',
    width: '60%',
    border: '4px solid RebeccaPurple ',
    borderRadius: '5%'
};
const ArticleWrapper = styled.div`
  height: auto;
  width: 25%;
  color: olive;
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  border: 2px solid olive;
`;


const NewsItem = ({ news }) => (
    <ul className="list-group">
      {news.articles ? news.articles.map((article) => (
          <ArticleWrapper key={article.title.slice(0,9)} >
              <h3>{article.title}</h3>
              <img style={imgStyle} src={article.urlToImage} alt="" />
              <h4>{article.description}</h4>
              <a href={article.url} target="_blank">READ MORE</a>
          </ArticleWrapper>
      )) : null }
    </ul>
  );

const mapStateToProps = (state) => ({
    news: state.news,
});

const ListNews = connect(mapStateToProps,null)(NewsItem);

export default ListNews;
/*
let NewsItem = ({ article }) => (
  article ?
      article.map((item, index) =>
              <storiestyle key={index} >
                      <h3>{item.title}</h3>
                      <img style={imgStyle} src={item.urlToImage} alt="" />
                      <h4>{item.description}</h4>
                      <a href={item.url} target="_blank">READ MORE</a>
              </storiestyle>
      )
      : null
);
*/