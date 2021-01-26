import { fireEvent, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import React from 'react';
import Routers from 'react-router-dom';
import HomePage from '../pages/home';
import renderWithRouter from './renderWithRouter';

describe('Testing HomePage', () => {
  test('Testing page loading correctly', async () => {
    const { history, getByRole, getByTestId } = renderWithRouter(<HomePage />, '/');
    await waitFor(() => getByTestId('h1-home-page'))
    expect(history.location.pathname).toBe('/');
    expect(getByRole('main')).toBeInTheDocument();
  })

  test('Testing Header', async () => {
    const { getByRole, queryAllByText, history, getByTestId } = renderWithRouter(<HomePage />, '/');
    await waitFor(() => getByTestId('h1-home-page'))
    const createYourNannyShare = getByRole('link', {name: /Create your Nanny Share/i})
    const browseShare = getByRole('link', {name: /Browse Shares/i})
    const signIn = getByRole('link', {name: /Sign in/i})
    const becomeNannyShareHost = getByRole('button', {name: /Become a Nanny Share Host/i})
    expect(getByRole('img', {name: /Hapu Logo/i})).toBeInTheDocument();
    expect(createYourNannyShare).toBeInTheDocument();
    expect(browseShare).toBeInTheDocument();
    expect(signIn).toBeInTheDocument();
    expect(becomeNannyShareHost).toBeInTheDocument();
    expect(queryAllByText(/Our Story/i)).toHaveLength(2);
    expect(queryAllByText(/Our Story/i)[0]).toBeInTheDocument();

    fireEvent.click(createYourNannyShare);
    expect(history.location.pathname).toBe('/1')

    fireEvent.click(browseShare);
    expect(history.location.pathname).toBe('/2')

    fireEvent.click(signIn);
    expect(history.location.pathname).toBe('/4')

  })

  test('Testing Hero Section section', async() => {
    const { getByText, getByTestId } = renderWithRouter(<HomePage />, '/');
    await waitFor(() => getByTestId('h1-home-page'))
    const header = getByTestId('h1-home-page')
    if (header.innerHTML == 'Create the childcare you need at a price you can afford') {
      expect(getByText(/Create the childcare/i)).toBeInTheDocument();
      expect(getByText(/Connect with other local families/i)).toBeInTheDocument();
    } else {
      expect(getByText(/Easily create/i)).toBeInTheDocument();
      expect(getByText(/Hapu is Airbnb for/i)).toBeInTheDocument();
    }
  })

  test('Testing Nanny Available section', async () => {
    const { getByRole, history, getByTestId } = renderWithRouter(<HomePage />, '/');
    await waitFor(() => getByTestId('h1-home-page'))
    const nanyAvailableLink = getByRole('link', {name: /Sarah’s day care/i})
    expect(getByRole('img', {name: /nanny/i})).toBeInTheDocument();
    expect(nanyAvailableLink).toBeInTheDocument();
    
    fireEvent.click(nanyAvailableLink);
    
    expect(history.location.pathname).toBe('/6')
  })

  test('Testing Share your home cost section', async () => {
    const { getByRole, history, getByTestId } = renderWithRouter(<HomePage />, '/');
    await waitFor(() => getByTestId('h1-home-page'))
    const getStarted = getByRole('link', {name: /Ready to get started/i});
    expect(getByRole('img', {name: /computer showing/i})).toBeInTheDocument();
    expect(getStarted).toBeInTheDocument();
    expect(getByRole('heading', {name: /Share your home, nanny/i})).toBeInTheDocument();

    fireEvent.click(getStarted);

    expect(history.location.pathname).toBe('/7');
  })

  test('Testing successful newsletter section', async () => {
    const { getByRole, getByTestId, getByText } = renderWithRouter(<HomePage />, '/');
    await waitFor(() => getByTestId('h1-home-page'))
    expect(getByRole('heading', {name: /Are you a parent without a/i})).toBeInTheDocument();
    
    const emailInput = getByTestId('userEmail');
    const nameInput = getByTestId('userName');
    const sendButton = getByRole('button', { name: /send/i });

    expect(emailInput).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    
    const mockNewsletter = async (url, {name, email}) => Promise.resolve({ data: 'ok' });
    const mockPost = jest.spyOn(axios, 'post').mockImplementation(mockNewsletter)

    fireEvent.change(emailInput, { target: { value: 'jafet@test.com.br' }});
    fireEvent.change(nameInput, { target: { value: 'jafet' }})
    fireEvent.click(sendButton, {
      target: {
        email: { value: emailInput },
        name: { value: nameInput },
      }
    });

    expect(mockPost).toBeCalled()

    await waitFor(() => getByText('Your request was received =)'))

    const receivedRequest = getByText('Your request was received =)')

    expect(receivedRequest).toBeInTheDocument();
  })

  test('Testing unsuccessful newsletter section', async () => {
    const { getByRole, getByTestId, getByText } = renderWithRouter(<HomePage />, '/');
    await waitFor(() => getByTestId('h1-home-page'))
    expect(getByRole('heading', {name: /Are you a parent without a/i})).toBeInTheDocument();
    
    const emailInput = getByTestId('userEmail');
    const nameInput = getByTestId('userName');
    const sendButton = getByRole('button', { name: /send/i });

    expect(emailInput).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    
    const mockNewsletter = async (url, {name, email}) => Promise.reject({});
    const mockPost = jest.spyOn(axios, 'post').mockImplementation(mockNewsletter)

    fireEvent.change(emailInput, { target: { value: 'jafet@test.com.br' }});
    fireEvent.change(nameInput, { target: { value: 'jafet' }})
    fireEvent.click(sendButton, {
      target: {
        email: { value: emailInput },
        name: { value: nameInput },
      }
    });

    expect(mockPost).toBeCalled()

    await waitFor(() => getByText('Something went wrong =('))

    const receivedRequest = getByText('Something went wrong =(')

    expect(receivedRequest).toBeInTheDocument();
  })

  test('Testing Share Payments section', async () => {
    const { getByRole, history, getByTestId, getByText } = renderWithRouter(<HomePage />, '/');
    await waitFor(() => getByTestId('h1-home-page'))
    const sharePayments = getByRole('link', {name: /Read how Bridget’s/i});
    expect(getByRole('img', {name: /share payment workflow/i})).toBeInTheDocument();
    expect(sharePayments).toBeInTheDocument();
    expect(getByRole('heading', {name: /Shared payments made simple/i})).toBeInTheDocument();
    expect(getByText(/Sometimes it’s hard enough just sharing a restaurant bill. /i)).toBeInTheDocument();
    fireEvent.click(sharePayments);

    expect(history.location.pathname).toBe('/8');
  })

  test('Testing Framework built for long term section', async () => {
    const { getByRole, history, getByTestId, getByText } = renderWithRouter(<HomePage />, '/');
    await waitFor(() => getByTestId('h1-home-page'))
    const readAboutHapu = getByRole('link', {name: /Read how Hapu’s tribal/i});
    expect(readAboutHapu).toBeInTheDocument();
    expect(getByRole('heading', {name: /A framework built for the long term/i})).toBeInTheDocument();
    expect(getByText(/Childcare is for the long term. And you need a framework you can count on/i)).toBeInTheDocument();
    expect(getByRole('img', {name: /your billing history/i})).toBeInTheDocument();
    fireEvent.click(readAboutHapu);

    expect(history.location.pathname).toBe('/8');
  })

  test('Testing Coming soon section', async () => {
    const { getByRole, history, getByTestId, getByText } = renderWithRouter(<HomePage />, '/');
    await waitFor(() => getByTestId('h1-home-page'))
    expect(getByRole('heading', {name: /Coming soon: Nanny Share Daily Diary!/i})).toBeInTheDocument();
    expect(getByText(/With the Hapu daily diary your nanny will be able/i)).toBeInTheDocument();
    expect(getByRole('img', {name: /daily diary/i})).toBeInTheDocument();
  })

  test('Testing Footer', async () => {
    const { getByRole, getAllByRole, history, getByTestId, getByText } = renderWithRouter(<HomePage />, '/');
    await waitFor(() => getByTestId('h1-home-page'))
    expect(getAllByRole('heading', {name: /Become a nanny share host/i})[1]).toBeInTheDocument();
    expect(getByText(/Takes less than 5 minutes to get started/i)).toBeInTheDocument();
    expect(getByRole('img', {name: /calendar/i})).toBeInTheDocument();

    const localNanny = getByRole('link', {name: /Or browse local nanny-shares/i});
    const shareNanny = getByRole('link', {name: /Share your Nanny/i});
    const ourStory = getAllByRole('link', {name: /our story/i})[1];
    const blogLink = getByRole('link', {name: /Blog/i});
    const termsAndPrivacy = getByRole('link', {name: /terms & privacy/i});
    const facebook = getByRole('img', {name: /Facebook`s logo/i});
    const twitter = getByRole('img', {name: /Twitter`s logo/i});
    const instagram = getByRole('img', {name: /Instagram`s logo/i});

    expect(localNanny).toBeInTheDocument();
    expect(shareNanny).toBeInTheDocument();
    expect(ourStory).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
    expect(ourStory).toBeInTheDocument();
    expect(termsAndPrivacy).toBeInTheDocument();
    expect(facebook).toBeInTheDocument();
    expect(twitter).toBeInTheDocument();
    expect(instagram).toBeInTheDocument();

    fireEvent.click(localNanny);
    expect(history.location.pathname).toBe('/8');
    fireEvent.click(shareNanny);
    expect(history.location.pathname).toBe('/9');
    fireEvent.click(ourStory);
    expect(history.location.pathname).toBe('/10');
    fireEvent.click(blogLink);
    expect(history.location.pathname).toBe('/11');
    fireEvent.click(termsAndPrivacy);
    expect(history.location.pathname).toBe('/11');
    fireEvent.click(facebook);
    expect(history.location.pathname).toBe('/12');
    fireEvent.click(twitter);
    expect(history.location.pathname).toBe('/13');
    fireEvent.click(instagram);
    expect(history.location.pathname).toBe('/14');
  })

  test('Testing Copyrights section', async () => {
    const { getByRole, history, getByTestId, getByText } = renderWithRouter(<HomePage />, '/');
    await waitFor(() => getByTestId('h1-home-page'))
    expect(getByText(/Copyright © 2017 Hapu PTY Limited All rights reserved/i)).toBeInTheDocument();
  })
})