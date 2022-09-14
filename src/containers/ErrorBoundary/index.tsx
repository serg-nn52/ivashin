import React, { Component, ReactNode } from 'react';

type StateType = {
  hasError: boolean;
  error: string;
};
type PropsType = {
  children: ReactNode;
};

class ErrorBoundary extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);

    this.state = { hasError: false, error: '' };
  }

  static getDerivedStateFromError(error: string) {
    return { hasError: true, error };
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <h1>{`Что-то пошло не так! Возникла ошибка ${error}`}</h1>;
    }
    return children;
  }
}

export default ErrorBoundary;
