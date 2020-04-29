import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Twitters = ({ twitters }) => (
    <GridTemplate pageType="twitters">
        {twitters.map(article => (
            <Card
                id={article.id}
                cardType="twitters"
                title={article.name}
                content={article.content}
                twitterImg={article.twitterImg}
                created={article.created}
                key={article.id}
            />
        ))}
    </GridTemplate>
);

Twitters.propTypes = {
    twitters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            cardType: PropTypes.string,
            title: PropTypes.string,
            content: PropTypes.string.isRequired,
            twitterName: PropTypes.string,
            created: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

const mapStateToProps = ({ twitters }) => ({ twitters });

export default connect(mapStateToProps)(Twitters);
