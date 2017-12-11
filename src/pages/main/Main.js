import React, { Component } from 'react';
import {Div, FirstPage, LeftDiv, RightDiv, BlurBackgroundTitle, Title, Video, FrontPage} from './Main.style'
import {translate} from 'react-i18next';

class Main extends Component {

  render() {
    const { t, i18n } = this.props;

    // const changeLanguage = (lng) => {
    //   i18n.changeLanguage(lng);
    // };

    return (
      <Div>
        <FirstPage>
          <Video autoPlay muted loop>
            <source src="http://thenewcode.com/assets/videos/polina.mp4" type="video/mp4"/>
          </Video>
          <LeftDiv>
            <p>I'm Left</p>
          </LeftDiv>
          <RightDiv>
            <Title delay={"0.5s"}>{t('helloDesc')}</Title>
            <Title delay={"0.9s"}>{t('ageDesc')}</Title>
            <Title delay={"1.2s"}>{t('hobbyDesc')}</Title>
            <Title delay={"1.4s"}>{t('whereDesc')}</Title>
            <Title delay={"1.5s"}>{t('studiedAtDesc')}</Title>
            <BlurBackgroundTitle delay={"1.55s"}>{t('whoAmIDesc')}</BlurBackgroundTitle>
          </RightDiv>
        </FirstPage>
        <FrontPage>
          <Title>ABOUT ME</Title>
          <Title>MISSION STATEMENT</Title>
          <Title>Philosophy</Title>
        </FrontPage>
        <FrontPage>
          <Title>Education</Title>
          <Title>Work</Title>
        </FrontPage>
        <FrontPage>
          <Title>Skills</Title>
        </FrontPage>
        <FrontPage>
          <Title>Some Of My Work</Title>
        </FrontPage>
      </Div>
    );
  }
}

export default translate('translations')(Main);

// Inspired by http://damian.drygiel.com/

/** i18n language Change
 <button onClick={() => i18n.changeLanguage('en')}>en</button>
 **/