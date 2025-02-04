import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './button.stories';
import { black, deepPurple } from '../../colors';
import { convertHexToRGB } from '../../helper';

const { PrimaryButton, DefaultButton, DisabledButton, PrefixIconButton, SuffixIconButton, LoadingButton, BlockButton, JellyButton } =
  composeStories(stories);

describe('Button test', () => {
  it('Buttons support clicking by default', () => {
    const onClickSpy = jest.fn();
    render(<DefaultButton onClick={onClickSpy} />);
    const buttonElement = screen.getByRole('button');
    buttonElement.click();
    expect(onClickSpy).toHaveBeenCalled();
  });

  it('Button disabled, clicking is invalid and the transparency is 0.5', () => {
    const onClickSpy = jest.fn();
    render(<DisabledButton onClick={onClickSpy} />);
    const buttonElement = screen.getByRole('button');
    buttonElement.click();
    expect(onClickSpy).not.toHaveBeenCalled();
    const styles = getComputedStyle(buttonElement);
    expect(styles.opacity).toBe('0.5');
  });

  it('Button support prefix icon', () => {
    render(<PrefixIconButton />);
    const buttonElement = screen.getByRole('button');
    const svgElement = buttonElement.querySelector('svg');
    // Button has two child elements
    expect(buttonElement.childNodes.length).toBe(2);
    // Button first child element is svg icon
    expect(buttonElement.firstChild?.contains(svgElement));
  });

  it('Button support suffix icon', () => {
    render(<SuffixIconButton />);
    const buttonElement = screen.getByRole('button');
    const svgElement = buttonElement.querySelector('svg');
    // Button has two child elements
    expect(buttonElement.childNodes.length).toBe(2);
    // Button last child element is svg icon
    expect(buttonElement.lastChild?.contains(svgElement));
  });

  it('Button support loading ui', () => {
    render(<LoadingButton />);
    const buttonElement = screen.getByRole('button');
    const svgElement = buttonElement.querySelector('svg');
    expect(buttonElement.childNodes.length).toBe(2);
    expect(buttonElement.lastChild?.contains(svgElement));
  });

  it('Button loading status disabled', () => {
    const onClickSpy = jest.fn();
    render(<LoadingButton onClick={onClickSpy} />);
    const buttonElement = screen.getByRole('button');
    buttonElement.click();
    expect(onClickSpy).not.toHaveBeenCalled();
  });

  it('Button occupy 100% width', () => {
    render(<BlockButton />);
    const buttonElement = screen.getByRole('button');
    const styles = getComputedStyle(buttonElement);
    expect(styles.width).toBe('100%');
  });

  it('Button default is solid button', () => {
    render(<PrimaryButton />);
    const buttonElement = screen.getByRole('button');
    const styles = getComputedStyle(buttonElement);
    const targetColor = convertHexToRGB(black[50]);
    expect(styles.color).toBe(targetColor);
  });

  it('Button support Jelly button(light button)', () => {
    render(<JellyButton />);
    const buttonElement = screen.getByRole('button');
    const styles = getComputedStyle(buttonElement);
    const targetColor = convertHexToRGB(deepPurple[500]);
    expect(styles.color).toBe(targetColor);
  });
});
