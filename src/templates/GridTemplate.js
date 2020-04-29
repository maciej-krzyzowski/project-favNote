import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import plusIcon from 'assets/icons/plus.svg';
import withContext from 'hoc/withContext';
import NewItemBar from '../components/organisms/NewItemBar/NewItemBar';

const StyledWrapper = styled.div`
    position: relative;
    padding: 25px 70px;
`;

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
`;

const StyledPageHeader = styled.div`
    margin: 25px 0 50px;
`;

const StyledHeading = styled(Heading)`
    margin: 25px 0 0 0;

    ::first-letter {
        text-transform: uppercase;
    }
`;

const StyledParagraph = styled(Paragraph)`
    margin: 0;
    font-weight: ${({ theme }) => theme.bold};
`;

const StyledButtonIcon = styled(ButtonIcon)`
    z-index: 99999;
    position: fixed;
    bottom: 40px;
    right: 40px;
    background-color: ${({ activecolor, theme }) => theme[activecolor]};
    background-size: 35%;
    border-radius: 50%;
`;

class GridTemplate extends Component {
    state = {
        isNewItemBarVisible: false,
    };

    handleNewItemBarToggler = () => {
        this.setState(prevState => ({
            isNewItemBarVisible: !prevState.isNewItemBarVisible,
        }));
    };

    render() {
        const { pageContext, children } = this.props;
        const { isNewItemBarVisible } = this.state;
        return (
            <UserPageTemplate>
                <StyledWrapper>
                    <StyledPageHeader>
                        <Input search placeholder="Search" />
                        <StyledHeading big>{pageContext}</StyledHeading>
                        <StyledParagraph>6 {pageContext}</StyledParagraph>
                    </StyledPageHeader>
                    <StyledGrid>{children}</StyledGrid>
                    <StyledButtonIcon
                        onClick={this.handleNewItemBarToggler}
                        icon={plusIcon}
                        activecolor={pageContext}
                    />
                    <NewItemBar
                        handleClose={this.handleNewItemBarToggler}
                        isVisible={isNewItemBarVisible}
                    />
                </StyledWrapper>
            </UserPageTemplate>
        );
    }
}

GridTemplate.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
    pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
    pageContext: 'notes',
};

export default withContext(GridTemplate);
