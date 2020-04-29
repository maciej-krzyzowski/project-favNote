import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Notes = ({ notes }) => (
    <GridTemplate pageType="notes">
        {notes.map(article => (
            <Card
                id={article.id}
                cardType="notes"
                title={article.title}
                content={article.content}
                created={article.created}
                key={article.id}
            />
        ))}
    </GridTemplate>
);

Notes.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            cardType: PropTypes.string,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            created: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(Notes);
