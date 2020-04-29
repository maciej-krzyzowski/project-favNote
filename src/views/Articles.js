import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Articles = ({ articles }) => (
    <GridTemplate pageType="articles">
        {articles.map(article => (
            <Card
                id={article.id}
                cardType="articles"
                title={article.title}
                content={article.content}
                articleUrl={article.articleUrl}
                created={article.created}
                key={article.id}
            />
        ))}
    </GridTemplate>
);

Articles.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            cardType: PropTypes.string,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            articleUrl: PropTypes.string,
            created: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);
