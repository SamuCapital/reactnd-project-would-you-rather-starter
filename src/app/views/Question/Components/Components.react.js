/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';
import { RadioGroup, ReversedRadioButton } from 'react-radio-buttons';
import PropTypes from 'prop-types';

import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

import { useLocation } from 'react-router-dom';
import {
  Option,
  QuestionBy,
  Name,
  OptionContainer,
  Headline,
  AnimatedDiv,
  ResultBarContainer,
  Container,
  SubmitButton,
} from '../Question.styled';

export const Options = ({ question, user, renderResults, session, path, filter }) => {
  Options.propTypes = {
    question: PropTypes.object.isRequired,
    renderResults: PropTypes.bool.isRequired,
  };
  // Options.defaultProps = { renderResults: true };
  return (
    <OptionContainer>
      <RadioGroup
        value={renderResults ? null : undefined}
        onChange={(value) => console.log('SHOULD IMPLEMENT DISPATCH RIGHT HERE ', value)}
      >
        <ReversedRadioButton
          pointColor="#8e0045"
          rootColor="#001427"
          padding={10}
          value="apple"
          disabledColor
          disabled={
            (renderResults && question.optionOne.votes.includes('tylermcginnis')) ||
            !session ||
            (path === '/' && !filter)
          }
        >
          <Option>{question.optionOne.text}</Option>
        </ReversedRadioButton>
        <ReversedRadioButton
          pointColor="#8e0045"
          rootColor="#001427"
          padding={10}
          value="orange"
          disabledColor
          disabled={
            (renderResults && question.optionTwo.votes.includes('tylermcginnis')) ||
            !session ||
            (path === '/' && !filter)
          }
        >
          <Option>{question.optionTwo.text}</Option>
        </ReversedRadioButton>
      </RadioGroup>
    </OptionContainer>
  );
};

export const AuthorName = ({ name }) => {
  AuthorName.propTypes = { name: PropTypes.string.isRequired };
  return (
    <QuestionBy>
      <i>Question By:</i>
      <br />
      <Name>
        <b>{name}</b>
      </Name>
    </QuestionBy>
  );
};
/**
 * @description Renders / Removes an Animated Component
 * @param  {Boolean} {show should Animation be shown initiated?
 * @param  {JSX} children Content to be rendered
 * @param  {Boolean} shouldRender actually render component
 * @param  {Function} setRender} function to toggle {shouldRender}
 */
export const Fade = ({ show, children, shouldRender, setRender }) => {
  Fade.propTypes = {
    show: PropTypes.bool.isRequired,
    children: PropTypes.element.isRequired,
    shouldRender: PropTypes.bool.isRequired,
    setRender: PropTypes.func.isRequired,
  };
  useEffect(() => {
    if (show) setRender(true);
  }, [setRender, show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    shouldRender && (
      <AnimatedDiv show={show} onAnimationEnd={onAnimationEnd}>
        {children}
      </AnimatedDiv>
    )
  );
};

export const ProgressBar = ({ result }) => {
  ProgressBar.propTypes = { result: PropTypes.number };
  ProgressBar.defaultProps = { result: 73 };
  return (
    <ResultBarContainer>
      <Progress
        width={150}
        percent={result}
        strokeWidth={10}
        status="success"
        theme={{
          error: {
            // symbol: `${percentage}%`,
            trailColor: 'pink',
            color: 'red',
          },
          default: {
            // symbol: `${percentage}%`,
            trailColor: 'lightblue',
            color: 'blue',
          },
          active: {
            // symbol: `${percentage}%`,
            trailColor: 'yellow',
            color: 'orange',
          },
          success: {
            // symbol: `${percentage}%`,
            trailColor: 'lime',
            color: 'green',
          },
        }}
      />
      <br />
      <div style={{ fontWeight: 'bold', color: '#001427', fontSize: 25 }}>
        {result}% of Users Share your Opinion!
      </div>
    </ResultBarContainer>
  );
};

/**
 * @description Takes in dynamic arguments on whether to create or display a Question
 * @param  {JSX} createQuestionContent Document Node representing Input fields for Question to create (from CreateQuestion.react)
 * @param  {Object} question Data of Question which is to be displayed
 * @param {Function} handleSubmit Submit Function for Create / Vote Card
 * @param {Boolean} renderResults If True disable Radio Buttons and select color theme
 * @returns {JSX} Content for Question Card
 */
export const questionContent = (
  createQuestionContent,
  question,
  handleSubmit,
  renderResults = null,
  session,
  path,
  filter,
) => {
  console.log('QUESTION: ', question);
  let title = session ? 'Submit Answer' : 'Please Login first!';
  let text = session ? 'Submit!' : 'LOGIN';
  if (path === '/' && session) {
    title = 'View Question';
    text = 'View Question';
  }
  return (
    <Container creatingQuestion={!!createQuestionContent} renderResults={renderResults}>
      <Headline>Would you rather...</Headline>
      {!createQuestionContent ? (
        <Options
          question={question}
          optionOne={question.optionOne.text}
          optionTwo={question.optionTwo.text}
          renderResults={renderResults}
          session={session}
          path={path}
          filter={filter}
        />
      ) : (
        createQuestionContent
      )}
      {renderResults && <ProgressBar />}
      {!renderResults && (
        <SubmitButton
          title={title}
          onClick={
            session
              ? () => {
                  handleSubmit();
                }
              : null
          }
        >
          {text}
        </SubmitButton>
      )}
    </Container>
  );
};

export const generateContent = (type, input, handleSubmit, path, session) => {
  let title = session ? 'Submit Answer' : 'Please Login first!';
  let text = session ? 'Submit!' : 'LOGIN';
  if (path === '/' && session) {
    title = 'View Question';
    text = 'View Question';
  }
  switch (type) {
    case 'create':
      return (
        <Container creatingQuestion>
          <Headline>Would you rather...</Headline>
          {input}
          <SubmitButton
            title={title}
            onClick={
              session
                ? () => {
                    handleSubmit();
                  }
                : null
            }
          >
            Create
          </SubmitButton>
        </Container>
      );
    default:
      return null;
  }
};
