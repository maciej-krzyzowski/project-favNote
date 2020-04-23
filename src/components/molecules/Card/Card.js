import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';

const StyledWrapper = styled.div`
    min-height: 380px;
    box-shadow: 0 10px 30px -5px hsla(0, 0%, 0%, 0.3);
    border-radius: 10px;
    overflow: hidden;
    display: grid;
    grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
    position: relative;
    padding: 17px 30px;
    background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

    :first-of-type {
        z-index: 10;
    }

    ${({ flex }) =>
        flex &&
        css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        `}
`;

const DateInfo = styled(Paragraph)`
    margin: 0 0 5px;
    font-weight: ${({ theme }) => theme.bold};
    font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
    margin: 0;
`;

const StyledAvatar = styled.img`
    width: 86px;
    height: 86px;
    border: 5px solid ${({ theme }) => theme.twitters};
    position: absolute;
    border-radius: 50px;
    right: 25px;
    top: 25px;
`;

const StyledLinkButton = styled.a`
    display: block;
    width: 47px;
    height: 47px;
    border-radius: 50px;
    background: white url(${LinkIcon}) no-repeat;
    background-size: 60%;
    background-position: 50%;
    position: absolute;
    right: 25px;
    top: 25px;
`;

class Card extends React.Component {
    state = {
        redirect: false,
    };

    handleCardClick = () => {
        this.setState({
            redirect: true,
        });
    };

    render() {
        const { id, cardType, title, created, twitterImg, articleUrl, content } = this.props;

        if (this.state.redirect) {
            return <Redirect to={`${cardType}/${id}`} />;
        }
        return (
            <StyledWrapper onClick={this.handleCardClick}>
                <InnerWrapper activeColor={cardType}>
                    <StyledHeading>{title}</StyledHeading>
                    <DateInfo>{created}</DateInfo>
                    {twitterImg ? <StyledAvatar src={twitterImg} /> : null}
                    {articleUrl ? <StyledLinkButton href={articleUrl} target="_blank" /> : null}
                </InnerWrapper>
                <InnerWrapper flex>
                    <Paragraph>{content}</Paragraph>
                    <Button secondary>REMOVE</Button>
                </InnerWrapper>
            </StyledWrapper>
        );
    }
}

Card.propTypes = {
    cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
    title: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    twitterImg: PropTypes.string,
    articleUrl: PropTypes.string,
    content: PropTypes.string.isRequired,
};

Card.defaultProps = {
    cardType: 'notes',
    articleUrl: null,
    twitterImg: null,
};

export default Card;
